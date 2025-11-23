# CodeGuard AI - Waitlist & Email Setup

This document provides setup instructions for the waitlist functionality and email notifications using Resend and Supabase.

## 🚀 Quick Setup

### 1. Environment Variables

Update your `.env` file with the following variables:

```bash
# Resend API Configuration
VITE_RESEND_API_KEY=your_resend_api_key_here

# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 2. Resend Setup

1. Sign up at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Replace the API key in your `.env` file
4. Verify your sending domain (or use the sandbox domain for testing)

### 3. Supabase Setup

1. Create a new project at [Supabase](https://supabase.com)
2. Go to Settings > API to get your URL and anon key
3. Update your `.env` file with these values
4. Run the SQL commands from `supabase-schema.sql` in your Supabase SQL editor

### 4. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to your homepage
3. Try signing up for the waitlist
4. Check your email for the welcome message
5. Verify the data is stored in your Supabase `waitlist` table

## 📧 Email Template Features

The welcome email includes:
- Professional branding with CodeGuard AI theme
- Responsive design for mobile and desktop
- Feature highlights and benefits
- Waitlist statistics
- Social links and unsubscribe options
- Modern gradient design matching your brand

## 🗄️ Database Schema

The `waitlist` table includes:
- `id`: Unique identifier (UUID)
- `email`: User email (unique)
- `name`: Optional user name
- `source`: Signup source tracking
- `created_at`: Timestamp
- `updated_at`: Auto-updated timestamp

## 🔒 Security Features

- Row Level Security (RLS) enabled
- Public insert policy for signups
- Public read policy for stats (count only)
- Email validation and duplicate prevention
- Error handling and user feedback

## 📊 Analytics

Track waitlist growth with:
- Total signups
- Daily/weekly/monthly growth
- Source attribution
- Signup trends over time

## 🛠️ Customization

### Email Template
Edit `src/lib/emailService.ts` to customize:
- Email content and styling
- Branding and colors
- Feature highlights
- Call-to-action buttons

### Form Behavior
Modify `src/components/WaitlistForm.tsx` for:
- Additional form fields
- Validation rules
- Success/error messages
- UI styling

### Database
Extend the schema in `supabase-schema.sql` for:
- Additional user fields
- Analytics tables
- Referral tracking
- A/B testing

## 🚦 Production Checklist

Before going live:
- [ ] Set up custom domain in Resend
- [ ] Configure production Supabase project
- [ ] Update environment variables
- [ ] Test email delivery
- [ ] Set up monitoring and alerts
- [ ] Configure email unsubscribe handling
- [ ] Add privacy policy and terms links

## 🆘 Troubleshooting

### Email Not Sending
1. Check Resend API key is correct
2. Verify domain is verified in Resend
3. Check console for error messages
4. Ensure email is not in spam folder

### Database Errors
1. Verify Supabase credentials
2. Check RLS policies are enabled
3. Confirm table schema matches
4. Test connection in Supabase dashboard

### Form Issues
1. Check browser console for errors
2. Verify network requests in dev tools
3. Test with different email formats
4. Check toast notifications for error details

## 📞 Support

For issues with this setup:
1. Check the console for error messages
2. Verify all environment variables are set
3. Test each service independently
4. Check Supabase and Resend dashboards for logs

Happy coding! 🎉