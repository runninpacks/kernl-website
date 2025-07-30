# KERNL Website - Framer Upload Instructions

## 📦 What's Included

The `kernl-website.zip` file contains a complete static website for KERNL, a crypto-native CRM platform. This is ready to upload to Framer.

## 🚀 How to Upload to Framer

### Option 1: Direct Upload (Recommended)
1. Go to [Framer.com](https://framer.com)
2. Create a new project or open an existing one
3. In your project, go to **Settings** → **Custom Code**
4. Upload the `kernl-website.zip` file
5. Framer will extract and host your website

### Option 2: Manual Upload
1. Extract the `kernl-website.zip` file
2. Upload the contents to your web hosting service
3. Configure your domain to point to the uploaded files

## 📁 File Structure

```
kernl-website/
├── index.html (Home page)
├── features/ (Features page)
├── integration/ (Integration page)
├── pricing/ (Pricing page)
├── resources/ (Resources page)
├── contact-us/ (Contact page)
├── reviews/ (Reviews page)
├── tokenomics/ (Tokenomics page)
├── _next/ (Next.js static assets)
└── 404.html (Error page)
```

## 🎨 Website Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with dark theme
- **Interactive Elements**: Hover effects, transitions, and animations
- **SEO Optimized**: Proper meta tags and structure
- **Fast Loading**: Optimized static files

## 🔧 Technical Details

- **Framework**: Next.js 15.4.5
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build**: Static export (no server required)
- **Size**: ~395KB compressed

## 📱 Pages Included

1. **Home** (`/`) - Landing page with hero section and dashboard preview
2. **Features** (`/features`) - Product features and capabilities
3. **Integration** (`/integration`) - Third-party integrations
4. **Pricing** (`/pricing`) - Pricing plans and tiers
5. **Resources** (`/resources`) - Documentation and help
6. **Contact Us** (`/contact-us`) - Contact information and form
7. **Reviews** (`/reviews`) - Customer testimonials
8. **Tokenomics** (`/tokenomics`) - Token information and distribution

## 🚀 Customization

To modify the website:
1. Edit the source files in the `src/` directory
2. Run `npm run build` to rebuild
3. The new `out/` directory will contain updated files
4. Re-upload to Framer

## 📞 Support

If you need help with the website or want to make changes, the source code is available in the project directory.

---

**KERNL** - Crypto-native CRM for token teams & DAOs
*Track wallet behavior, segment holders, assign reputation scores, and target airdrops — all using on-chain data without Web2 dependencies.* 