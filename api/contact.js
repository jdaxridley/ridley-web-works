function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalize(value) {
  return String(value ?? '').trim();
}

async function sendViaResend({ fromEmail, toEmail, replyTo, subject, text, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('Missing RESEND_API_KEY');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: replyTo || undefined,
      subject,
      text,
      html
    })
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend error: ${response.status} ${detail}`);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { error: 'Method not allowed' });
  }

  try {
    const {
      name = '',
      business = '',
      phone = '',
      email = '',
      industry = '',
      message = ''
    } = req.body || {};

    const normalized = {
      name: normalize(name),
      business: normalize(business),
      phone: normalize(phone),
      email: normalize(email),
      industry: normalize(industry),
      message: normalize(message)
    };

    if (!normalized.name || !normalized.business || !normalized.phone || !normalized.email) {
      return json(res, 400, { error: 'Please complete all required fields.' });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
    const clientName = process.env.CLIENT_DISPLAY_NAME || 'Ridley Web Works';

    if (!toEmail) throw new Error('Missing CONTACT_TO_EMAIL');

    const subject = `New project request: ${normalized.name} — ${normalized.business}`;

    const text = [
      `Name: ${normalized.name}`,
      `Business: ${normalized.business}`,
      `Phone: ${normalized.phone}`,
      `Email: ${normalized.email}`,
      normalized.industry ? `Industry: ${normalized.industry}` : null,
      '',
      normalized.message ? `Message:\n${normalized.message}` : null
    ].filter(l => l !== null).join('\n');

    const html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
  <tr><td align="center">
    <table width="580" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
      <tr><td style="background:#1a1a1a;padding:28px 36px;">
        <p style="margin:0;font-size:13px;font-weight:600;color:#E8601C;letter-spacing:1px;text-transform:uppercase;">${escapeHtml(clientName)}</p>
        <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;color:#ffffff;">New Project Request</h1>
      </td></tr>
      <tr><td style="background:#E8601C;padding:10px 36px;">
        <p style="margin:0;font-size:13px;font-weight:600;color:#fff;">A new lead submitted a request through your website</p>
      </td></tr>
      <tr><td style="padding:32px 36px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;width:40%;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;">Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:15px;color:#111827;font-weight:500;">${escapeHtml(normalized.name)}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;">Business</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:15px;color:#111827;font-weight:500;">${escapeHtml(normalized.business)}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:15px;color:#111827;font-weight:500;">${escapeHtml(normalized.phone)}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:15px;color:#111827;font-weight:500;">${escapeHtml(normalized.email)}</td>
          </tr>
          ${normalized.industry ? `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;">Industry</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:15px;color:#111827;font-weight:500;">${escapeHtml(normalized.industry)}</td>
          </tr>` : ''}
        </table>
        ${normalized.message ? `
        <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;">Message</p>
        <div style="background:#f8fafc;border-left:3px solid #E8601C;border-radius:4px;padding:16px 20px;">
          <p style="margin:0;font-size:15px;color:#1e293b;line-height:1.7;">${escapeHtml(normalized.message).replace(/\n/g, '<br>')}</p>
        </div>` : ''}
        <div style="margin-top:28px;padding:20px;background:#f8fafc;border-radius:6px;text-align:center;">
          <a href="tel:${escapeHtml(normalized.phone)}" style="display:inline-block;background:#1a1a1a;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:4px;font-size:14px;font-weight:600;">Call ${escapeHtml(normalized.phone)}</a>
        </div>
      </td></tr>
      <tr><td style="padding:20px 36px;border-top:1px solid #f0f0f0;">
        <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">Sent via ${escapeHtml(clientName)} website contact form.</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;

    await sendViaResend({ fromEmail, toEmail, replyTo: normalized.email, subject, text, html });

    return json(res, 200, { ok: true });
  } catch (error) {
    console.error('contact api error', error);
    return json(res, 500, { error: 'Unable to send request right now. Please call instead.' });
  }
}
