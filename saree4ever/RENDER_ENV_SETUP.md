# 🚀 Render Environment Variables Setup Guide

## Updated render.yaml
The `render.yaml` file has been updated with all required environment variables. Now you need to add the **secret values** to your Render dashboard.

---

## 📋 Step-by-Step Setup in Render Dashboard

### 1. Go to Your Render Service
- Visit: https://dashboard.render.com
- Select: `saree4ever-backend` service
- Go to: **Settings → Environment**

### 2. Add These Environment Variables

Copy the values from your local `backend/.env` file and paste them into Render:

#### **Supabase Configuration** (Copy from your .env)
```
SUPABASE_URL: https://qvhdhltupyshdswtmupw.supabase.co
SUPABASE_ANON_KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### **Database Connection** (Copy from your .env)
```
DATABASE_URL: postgresql://postgres:S4WWEBAPP123@db.qvhdhltupyshdswtmupw.supabase.co:5432/postgres
DIRECT_URL: postgresql://postgres:S4WWEBAPP123@db.qvhdhltupyshdswtmupw.supabase.co:5432/postgres
```

#### **JWT Secret** (Already in .env)
```
JWT_SECRET: 27f1e49cec01039c3da899ab8fe09e4564f09c386ed1d8123088649c2cbc72eb
```

#### **Frontend URL** (Already set in render.yaml)
```
FRONTEND_URL: https://saree4ever.vercel.app
```
*(Update this if your frontend URL is different)*

#### **Razorpay** (⚠️ IMPORTANT - Get from Razorpay)
Need to get from Razorpay dashboard:
```
RAZORPAY_KEY_ID: rzp_test_... (or rzp_live_...)
RAZORPAY_KEY_SECRET: ... (keep this secret!)
```

**How to get Razorpay keys:**
1. Go to: https://dashboard.razorpay.com
2. Click: Settings → API Keys
3. Copy: Key ID and Key Secret
4. Use TEST keys for staging, LIVE keys for production

#### **Email Configuration** (Gmail SMTP)
```
SMTP_USER: your-email@gmail.com
SMTP_PASS: your-app-password-here
```

**How to set up Gmail:**
1. Go to: https://myaccount.google.com/apppasswords
2. Select: Mail & App password
3. Generate new app password (16 characters)
4. Copy and paste into SMTP_PASS

#### **Admin Emails** (Already set in render.yaml)
```
ADMIN_EMAILS: admin@saree4ever.com
```

---

## 🔄 Complete Environment Variable List

| Variable | Source | Required | Notes |
|----------|--------|----------|-------|
| NODE_ENV | Already set | ✅ | = `production` |
| PORT | Already set | ✅ | = `5001` |
| SUPABASE_URL | Your .env | ✅ | From Supabase project |
| SUPABASE_ANON_KEY | Your .env | ✅ | Anon key from Supabase |
| SUPABASE_SERVICE_ROLE_KEY | Your .env | ✅ | Service role key |
| DATABASE_URL | Your .env | ✅ | PostgreSQL connection |
| DIRECT_URL | Your .env | ✅ | Same as DATABASE_URL |
| JWT_SECRET | Your .env | ✅ | Already configured |
| FRONTEND_URL | render.yaml | ✅ | Update if needed |
| RAZORPAY_KEY_ID | Razorpay | ✅ | Payment integration |
| RAZORPAY_KEY_SECRET | Razorpay | ✅ | Keep secret! |
| SMTP_HOST | render.yaml | ✅ | = `smtp.gmail.com` |
| SMTP_PORT | render.yaml | ✅ | = `587` |
| SMTP_USER | Gmail | ✅ | Your email address |
| SMTP_PASS | Gmail | ✅ | App password (16 chars) |
| ADMIN_EMAILS | render.yaml | ✅ | Admin email addresses |

---

## ✅ Verification Checklist

After adding all variables in Render dashboard:

- [ ] All 15 environment variables are set
- [ ] No variables show as "Sync" (secret values only)
- [ ] Razorpay keys are valid (TEST or LIVE)
- [ ] Gmail app password works
- [ ] FRONTEND_URL is correct
- [ ] Database connection string is valid

---

## 🚀 Deploy with New Variables

1. **Go to Render Dashboard**
2. **Select saree4ever-backend service**
3. **Click "Manual Deploy" or wait for auto-deploy from Git**
4. **Watch the build logs** - It will:
   - Install dependencies
   - Run database migrations
   - Start the server

---

## 🧪 Test the Deployment

### Check if backend is running:
```bash
curl https://saree4ever-v2-backend.onrender.com/health
```

Should return:
```json
{"status":"ok","message":"Server is running"}
```

### Check API endpoint:
```bash
curl https://saree4ever-v2-backend.onrender.com/api
```

Should return:
```json
{
  "message": "Saree4ever API",
  "version": "1.0.0",
  "endpoints": { ... }
}
```

---

## 🐛 Common Issues & Fixes

### Issue: "Deployment failed - DATABASE_URL is invalid"
**Fix:** Copy the exact DATABASE_URL from your local `.env` file, don't modify it.

### Issue: "CORS error - Frontend can't reach backend"
**Fix:** Make sure FRONTEND_URL matches your actual frontend URL:
- Vercel: `https://saree4ever.vercel.app`
- Custom domain: `https://yourdomain.com`

### Issue: "RAZORPAY payment fails"
**Fix:** 
- Make sure RAZORPAY_KEY_ID starts with `rzp_test_` or `rzp_live_`
- Check that RAZORPAY_KEY_SECRET is correct (no extra spaces)

### Issue: "Email not sending"
**Fix:**
- Make sure Gmail app password is enabled (not regular password)
- App password should be 16 characters, no spaces
- Check Gmail account has "Less secure apps" enabled if using 2FA

---

## 📝 Notes

- **Test Mode:** Use `rzp_test_*` keys from Razorpay for testing
- **Live Mode:** Switch to `rzp_live_*` keys before going to production
- **Security:** Never commit `.env` file to Git (already in .gitignore)
- **Migration:** The buildCommand now runs `npm run migrate` automatically
- **Health Check:** Render will check `/health` endpoint every 10 minutes

---

## 🔒 Security Best Practices

1. ✅ All secrets marked as `sync: false` in render.yaml
2. ✅ Never commit actual keys to repository
3. ✅ Use TEST keys for development/staging
4. ✅ Rotate RAZORPAY keys quarterly
5. ✅ Keep JWT_SECRET secure
6. ✅ Use app-specific Gmail passwords (not account password)

---

## ✨ What's Next

After setting up Render environment variables:

1. ✅ Deploy frontend to Vercel
2. ✅ Set frontend environment variable: `NEXT_PUBLIC_API_URL`
3. ✅ Test end-to-end flow (products → cart → payment)
4. ✅ Set up monitoring & alerts
5. ✅ Configure CI/CD webhooks

---

**Need help?** Check these files:
- [backend/.env](backend/.env) - Local environment reference
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- [PROJECT_WIRING_AUDIT.md](PROJECT_WIRING_AUDIT.md) - Full audit report
