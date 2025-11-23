import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

interface WelcomeEmailData {
  email: string;
  name?: string;
}

export const sendWelcomeEmail = async ({ email, name }: WelcomeEmailData) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'CodeSentinelAI <samithnfernando@gmail.com>',
      to: email,
      subject: 'Welcome to CodeSentinelAI - You\'re on the Waitlist! 🚀',
      html: createWelcomeEmailTemplate({ email, name }),
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};

const createWelcomeEmailTemplate = ({ }: { email: string; name?: string }) => {
  const displayName = 'Developer';
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to CodeSentinelAI</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8f9fa;
        }
        
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .header {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          padding: 40px 30px;
          text-align: center;
          color: white;
        }
        
        .logo {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        
        .subtitle {
          font-size: 16px;
          opacity: 0.9;
        }
        
        .content {
          padding: 40px 30px;
        }
        
        .greeting {
          font-size: 24px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 20px;
        }
        
        .message {
          font-size: 16px;
          color: #4b5563;
          margin-bottom: 25px;
        }
        
        .highlight-box {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-left: 4px solid #0ea5e9;
          padding: 20px;
          border-radius: 8px;
          margin: 25px 0;
        }
        
        .highlight-title {
          font-weight: 600;
          color: #0c4a6e;
          margin-bottom: 10px;
        }
        
        .feature-list {
          list-style: none;
          margin: 20px 0;
        }
        
        .feature-list li {
          padding: 8px 0;
          display: flex;
          align-items: center;
        }
        
        .checkmark {
          width: 20px;
          height: 20px;
          background-color: #10b981;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
          color: white;
          font-weight: bold;
          font-size: 12px;
        }
        
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 600;
          margin: 20px 0;
          text-align: center;
        }
        
        .stats {
          background-color: #f9fafb;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          margin: 25px 0;
        }
        
        .stat-item {
          display: inline-block;
          margin: 0 15px;
          text-align: center;
        }
        
        .stat-number {
          font-size: 24px;
          font-weight: 700;
          color: #6366f1;
        }
        
        .stat-label {
          font-size: 12px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .footer {
          background-color: #f9fafb;
          padding: 30px;
          text-align: center;
          color: #6b7280;
          font-size: 14px;
        }
        
        .social-links {
          margin: 15px 0;
        }
        
        .social-links a {
          display: inline-block;
          margin: 0 10px;
          color: #6b7280;
          text-decoration: none;
        }
        
        @media (max-width: 600px) {
          .container {
            margin: 10px;
            border-radius: 8px;
          }
          
          .header, .content, .footer {
            padding: 25px 20px;
          }
          
          .stat-item {
            display: block;
            margin: 10px 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">CodeSentinelAI</div>
          <div class="subtitle">Stop Debugging AI Code</div>
        </div>
        
        <div class="content">
          <div class="greeting">Welcome aboard, ${displayName}! 🎉</div>
          
          <div class="message">
            Thank you for joining the CodeSentinelAI waitlist! You're now part of an exclusive group of forward-thinking developers who are ready to revolutionize how we work with AI-generated code.
          </div>
          
          <div class="highlight-box">
            <div class="highlight-title">🚀 What's Next?</div>
            <p>We're putting the finishing touches on CodeSentinelAI and expect to launch in <strong>December 2025</strong>. You'll be among the first to get access to our powerful code validation platform.</p>
          </div>
          
          <div class="message">
            <strong>What CodeSentinelAI will do for you:</strong>
          </div>
          
          <ul class="feature-list">
            <li>
              <span class="checkmark">✓</span>
              <span>Instantly validate AI-generated code for errors and security flaws</span>
            </li>
            <li>
              <span class="checkmark">✓</span>
              <span>Get confidence scores and detailed analysis reports</span>
            </li>
            <li>
              <span class="checkmark">✓</span>
              <span>Receive intelligent suggestions for code improvements</span>
            </li>
            <li>
              <span class="checkmark">✓</span>
              <span>Save hours of debugging and testing time</span>
            </li>
            <li>
              <span class="checkmark">✓</span>
              <span>Integrate seamlessly with your existing workflow</span>
            </li>
          </ul>
          
          <div class="stats">
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">Developers Waiting</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">23%</div>
              <div class="stat-label">Avg. Code Quality Score</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10x</div>
              <div class="stat-label">Faster Validation</div>
            </div>
          </div>
          
          <center>
            <a href="https://codesentinelai.com" class="cta-button">
              Learn More About CodeSentinelAI
            </a>
          </center>
          
          <div class="message">
            Keep an eye on your inbox - we'll send you updates on our progress and be the first to know when we're ready to launch!
          </div>
          
          <div class="message">
            Have questions or feedback? Simply reply to this email - we'd love to hear from you!
          </div>
          
          <div class="message">
            Best regards,<br>
            <strong>The CodeSentinelAI Team</strong>
          </div>
        </div>
        
        <div class="footer">
          <p>CodeSentinelAI - Revolutionizing AI Code Validation</p>
          <div class="social-links">
            <a href="#">Twitter</a> •
            <a href="#">LinkedIn</a> •
            <a href="#">GitHub</a>
          </div>
          <p style="margin-top: 15px; font-size: 12px;">
            This email was sent because you signed up for the CodeSentinelAI waitlist.<br>
            If you no longer wish to receive these emails, you can <a href="#" style="color: #6b7280;">unsubscribe here</a>.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};