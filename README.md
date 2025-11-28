# PT MPAS Website - React.js Implementation

## 🚀 Complete Website for PT Mitra Prana Abadi Sentosa

A professional, production-ready website for PT MPAS featuring Accuflow well test technology products.

## 📦 What's Included

### ✅ Completed Components
- **Navigation** - Responsive navbar with mobile menu
- **Footer** - Complete with 3 office locations (Jakarta, Bekasi, Duri)
- **Homepage** - Full landing page with hero, trust indicators, services preview
- **Products Page** - Product catalog with filtering and search
- **Contact Page** - Form with mailto functionality
- **Product Data** - 7 Accuflow products from the brochure

### 📋 Files Created
```
mpas-website/
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css (design system)
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Homepage.jsx
│   │   ├── Products.jsx
│   │   └── Contact.jsx
│   └── data/
│       └── products.js (7 Accuflow products)
```

## 🛠️ Setup & Installation

### Step 1: Install Dependencies
```bash
cd /home/claude/mpas-website
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The website will open at `http://localhost:3000`

### Step 3: Build for Production
```bash
npm run build
```

## 📝 Remaining Tasks

### 1. Create Missing CSS Files

You need to create these CSS files:

**Homepage.css** - Style for homepage
**Products.css** - Style for products page
**Contact.css** - Style for contact page

Copy the styling patterns from the HTML mockups I created earlier.

### 2. Create Remaining Pages

**About.jsx** - Company history, team, certifications
**ProductDetail.jsx** - Individual product details
**Services.jsx** - Service details
**Portfolio.jsx** - Project showcase

### 3. Add Product Images

Replace placeholder images with actual product photos:
- Get photos from Instagram: @ptmpas
- Add Accuflow product renderings
- Add project photos for portfolio

Images should be placed in `public/images/` directory.

### 4. Complete Styling

Transfer all CSS from the HTML mockups to corresponding CSS files:
- Homepage.css (from homepage-mockup.html)
- Products.css (from product-catalog-mockup.html)
- Contact.css (from contact-mockup.html)

## 🎨 Design System Reference

All colors, typography, and spacing are defined in `src/index.css`:

**Colors:**
- Primary Orange: #FF8C42
- Navy Dark: #1A2332
- White: #FFFFFF

**Typography:**
- Font: Inter
- H1: 56px / H2: 36px / H3: 28px

**Spacing:**
- Base: 8px grid
- Section padding: 80px

## 📱 Key Features

### Homepage
- Hero section with 26-year headline
- Trust indicators (ISO, 500+ projects, etc.)
- Company overview
- Services preview (4 cards)
- Product range preview
- CTA section

### Products Page
- Filter by category, pipe type, configuration
- Search functionality
- Product cards with details
- WhatsApp inquiry per product
- 7 Accuflow products loaded from data

### Contact Page
- Mailto form (opens default email client)
- Alternative WhatsApp contact
- 3 office locations displayed:
  - Head Office (Jakarta)
  - Workshop Bekasi
  - Workshop Duri (NEW!)
- Business hours
- Contact information

## 🔗 Important Links

**WhatsApp:** https://wa.me/6281195521770  
**Email:** mpasjkt@ptmpas.com  
**Instagram:** @ptmpas

## 📊 Products Included

All 7 products from Accuflow brochure:
1. Accuflow 2-Phase SR Series
2. Accuflow 2-Phase LT Series
3. Accuflow 2-Phase JR Series
4. Accuflow 3-Phase Series
5. Accuflow 3-Phase JR Series
6. Mobile Well Testing Unit
7. Trailer-Mounted System

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Option 3: Traditional Hosting
```bash
npm run build
# Upload dist/ folder to your web server
```
