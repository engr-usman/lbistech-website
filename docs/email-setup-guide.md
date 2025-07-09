# Email Setup Guide: Resend vs Self-Hosted SMTP

## Option 1: Resend (Recommended for Production)

### Pros:
- ✅ **Reliable delivery** - High deliverability rates
- ✅ **Easy setup** - Just API key needed
- ✅ **Professional** - Dedicated email infrastructure
- ✅ **Analytics** - Email tracking and analytics
- ✅ **Scalable** - Handles high volume automatically
- ✅ **No maintenance** - Fully managed service
- ✅ **Free tier** - 3,000 emails/month free

### Cons:
- ❌ **Cost** - Paid service after free tier
- ❌ **Dependency** - Relies on third-party service

### Setup:
1. Sign up at [resend.com](https://resend.com)
2. Get API key
3. Add to environment variables
4. Ready to use!

## Option 2: Self-Hosted SMTP Server

### Pros:
- ✅ **Full control** - Complete ownership
- ✅ **No recurring costs** - One-time setup
- ✅ **Privacy** - Data stays on your server
- ✅ **Customization** - Full configuration control

### Cons:
- ❌ **Complex setup** - Requires technical expertise
- ❌ **Deliverability issues** - May end up in spam
- ❌ **Maintenance** - Ongoing server management
- ❌ **Security risks** - Need to secure mail server
- ❌ **Blacklisting** - IP reputation management

### Setup Instructions for Self-Hosted:

#### Install Postfix (Ubuntu)
```bash
sudo apt update
sudo apt install postfix mailutils

# Configure Postfix
sudo dpkg-reconfigure postfix
# Choose "Internet Site"
# Enter your domain name
```

#### Configure Postfix
```bash
sudo nano /etc/postfix/main.cf

# Add these lines:
myhostname = mail.yourdomain.com
mydomain = yourdomain.com
myorigin = $mydomain
inet_interfaces = all
mydestination = $myhostname, localhost.$mydomain, localhost, $mydomain
```

#### Setup SSL/TLS
```bash
# Install Let's Encrypt
sudo apt install certbot

# Get SSL certificate
sudo certbot certonly --standalone -d mail.yourdomain.com

# Configure SSL in Postfix
sudo nano /etc/postfix/main.cf

# Add SSL configuration:
smtpd_tls_cert_file = /etc/letsencrypt/live/mail.yourdomain.com/fullchain.pem
smtpd_tls_key_file = /etc/letsencrypt/live/mail.yourdomain.com/privkey.pem
smtpd_use_tls = yes
smtpd_tls_security_level = may
```

#### Configure Authentication
```bash
sudo nano /etc/postfix/main.cf

# Add SASL authentication:
smtpd_sasl_auth_enable = yes
smtpd_sasl_type = dovecot
smtpd_sasl_path = private/auth
```

#### Install and Configure Dovecot
```bash
sudo apt install dovecot-core dovecot-imapd dovecot-pop3d

sudo nano /etc/dovecot/dovecot.conf
# Uncomment: protocols = imap pop3 lmtp

sudo nano /etc/dovecot/conf.d/10-mail.conf
# Set: mail_location = maildir:~/Maildir
```

#### DNS Configuration
Add these DNS records:
```
A     mail.yourdomain.com    -> your_server_ip
MX    yourdomain.com         -> mail.yourdomain.com (priority 10)
TXT   yourdomain.com         -> "v=spf1 mx ~all"
```

## Option 3: Gmail SMTP (Simple Alternative)

### Setup Gmail SMTP:
1. Enable 2-factor authentication on Gmail
2. Generate App Password
3. Use these settings:
   - Host: smtp.gmail.com
   - Port: 587
   - User: your_email@gmail.com
   - Pass: your_app_password

### Environment Variables:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_16_character_app_password
```

## Recommendation

**For Production: Use Resend**
- More reliable
- Better deliverability
- Less maintenance
- Professional appearance

**For Development/Testing: Gmail SMTP**
- Quick setup
- Free for low volume
- Good for testing

**For Enterprise: Self-hosted only if you have:**
- Dedicated system administrator
- High email volume (>10k/month)
- Strict data privacy requirements
- Technical expertise for maintenance

## Testing Email Setup

```javascript
// Test email function
async function testEmail() {
  try {
    const response = await fetch('/api/test-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: 'test@example.com',
        subject: 'Test Email',
        message: 'This is a test email'
      })
    });
    
    const result = await response.json();
    console.log('Email test result:', result);
  } catch (error) {
    console.error('Email test failed:', error);
  }
}
```