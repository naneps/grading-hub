# Product Specification Document
## Preset Lightroom E-Commerce Platform

**Version:** 1.0  
**Date:** May 18, 2026  
**Status:** Ready for Development

---

## 1. PRODUCT OVERVIEW

### Vision
A beautiful, performance-optimized e-commerce platform for selling Lightroom presets with integrated before-after gallery showcase. Primary goal: build trust through freemium model, convert to paid through quality + brand.

### Product Tiers

| Tier | Users | Features | Revenue Impact |
|---|---|---|---|
| **Free** | Email-captured users | 3 free presets, email list | Lead generation |
| **Paid Individual** | Customers | Buy 1 preset at a time | Direct revenue |
| **Paid Bundle** | Power users | Buy 5-12 presets bundled | Higher AOV |

---

## 2. DETAILED FEATURE SPECIFICATIONS

### A. HOME PAGE

**Purpose:** Convert visitors → browsing or free preset download

**Components:**
1. **Header/Navigation**
   - Logo + brand name
   - Nav: Home, Gallery, Presets, How To Use, About
   - Cart icon (shopping cart indicator)
   - Account icon (login/register)

2. **Hero Section**
   - Eye-catching before-after slider (2-3 presets showcase)
   - Headline: "Professional Color. One Click."
   - Subheadline: "1000+ photos. Preset-ready."
   - CTA button: "Explore Presets" (primary)
   - Secondary CTA: "Download Free Presets" (secondary)
   - Background: stunning preset-applied photo

3. **Feature Highlight Section**
   - 3 columns:
     - Icon + "1000+ Examples" + description
     - Icon + "One-Click Magic" + description
     - Icon + "Instant Results" + description

4. **Featured Presets Section**
   - 4 preset cards (2x2 grid, responsive)
   - Each card:
     - Preset thumbnail
     - Preset name
     - Category tag
     - Price
     - "View Details" or "Add to Cart" button
   - Show mix of free + paid to encourage exploration

5. **Social Proof Section** (if data available)
   - Star rating + testimonial
   - "Join 500+ photographers" or similar
   - User photos using presets (if available)

6. **Free Presets CTA**
   - Large section highlighting free tier
   - "Get 3 Free Presets + Tips"
   - Email input field
   - "Download Now" button
   - Copy: "No credit card. No spam. Just presets."

7. **Footer**
   - Quick links (About, FAQ, Support, Privacy)
   - Social links
   - Email signup alternative
   - Copyright

---

### B. GALLERY PAGE

**Purpose:** Showcase 1000+ photos, let users explore presets visually

**Design:**
- Grid layout (responsive: 1 column mobile, 3-4 desktop)
- Lazy loading (load 20 images initially, load more on scroll)
- Image optimization (optimized file sizes)

**Features:**

1. **Filter Panel** (sticky, mobile: collapsible)
   - Filter by preset: dropdown with all presets
   - Filter by category: "Landscape", "Portrait", "B&W", "Moody", "Bright", etc.
   - Filter by camera brand (optional, phase 2)
   - Reset filters button
   - Active filter display ("Showing 45 images for 'Warm Golden'")

2. **Image Grid**
   - Thumbnail display
   - Hover effect: show preset name overlay
   - Click: open lightbox modal

3. **Lightbox Modal** (on click)
   - Full resolution image (but optimized)
   - Before-after slider (interactive, drag to compare)
   - Preset name + category
   - "Add to Cart" button (prominent)
   - "Download Free Preset" button (if free)
   - Navigation: prev/next image
   - Close button

4. **Sorting**
   - Sort by: Newest, Most Popular, Price (low-high, high-low)
   - Display count: "Showing 120 / 450 images"

5. **Performance Optimization**
   - Lazy loading images (Intersection Observer)
   - WebP format with fallback
   - Thumbnail size: max 400px
   - Full size: max 1200px
   - Target load time: <1 second for 20 images

---

### C. PRESETS CATALOG PAGE

**Purpose:** Browse, compare, and buy presets

**Layout:**
- Sidebar filter (desktop) / top filter (mobile)
- Grid of preset cards (3-4 columns, responsive)

**Preset Card Components:**
- Thumbnail image (best before-after sample)
- Preset name
- Category tag
- Short description (1 line)
- Price (if paid) / "Free" badge (if free)
- "View Details" button (primary)
- "Add to Cart" button (if paid, secondary)
- Star rating (optional, future)

**Filters:**
- Category: All, Landscape, Portrait, B&W, Moody, Bright, Vintage, etc.
- Price: Free, Under $5, $5-15, $15+
- Compatibility: All, Lightroom CC, Lightroom Classic, Mobile

**Sorting:**
- Newest first
- Most popular
- Price: low-high, high-low

**Pagination:**
- Show 12 presets per page
- "Load more" button or pagination arrows

---

### D. INDIVIDUAL PRESET PAGE

**Purpose:** Detailed product page for single preset (or bundle)

**Components:**

1. **Breadcrumb Navigation**
   - Home > Presets > [Category] > [Preset Name]

2. **Preset Gallery** (left side, desktop; top mobile)
   - Main image (best before-after sample)
   - Thumbnail gallery below (3-5 related images)
   - Click thumbnail to switch main image
   - Before-after slider on hover/click

3. **Product Info** (right side, desktop; below mobile)
   - **Preset Name** (large heading)
   - **Category** (tag)
   - **Price** (large, if paid)
   - **Rating** (stars, if available, future)
   
   **Description:**
   - 1-2 paragraph about preset
   - Key benefits (bullet points, 3-5 items)
   - Best for: [use cases]
   - Mood: [aesthetic description]
   
   **Specifications:**
   - Compatibility: Lightroom Classic ✓, Lightroom CC ✓, Mobile ✓
   - File size: XXX KB
   - Adjustment intensity: Light / Medium / Strong
   
   **Action Buttons:**
   - Primary: "Add to Cart" (paid) or "Download Free Preset" (free)
   - Secondary: "View in Gallery" (link to gallery filtered by this preset)

4. **Installation Instructions**
   - Expandable section
   - Step-by-step with screenshots
   - Video link (if available)
   - Troubleshooting link

5. **Related Presets**
   - 3-4 similar presets carousel
   - "You might also like..."
   - Click to navigate to their pages

6. **Customer Reviews** (phase 2)
   - Star rating
   - Review text
   - Author name
   - Date

---

### E. BUNDLES PAGE

**Similar to Catalog, but for bundles**

**Bundle Card:**
- Bundle name
- Cover image (grid of preset thumbnails)
- Number of presets included: "5 Presets"
- Price
- "View Bundle" button

**Bundle Detail Page:**
- Similar layout to individual preset
- Bundle composition: list of presets included with small thumbnails
- Bundle benefit copy
- Total value if bought individually
- Discount percentage
- "Add to Cart" button
- Reviews (future)

**Bundle Strategy:**
- Small Bundle: 5 presets, $14.99 (themed: landscape, portrait, etc)
- Large Bundle: All presets, $39.99
- (Can add more bundles based on popularity)

---

### F. FREE PRESETS SECTION / EMAIL CAPTURE

**Location:** 
- Dedicated page: /free-presets
- Also on home page as prominent CTA
- Accessible via nav menu

**Design:**
- Large hero section with free preset showcase
- 3 preset cards displayed
- Each preset shows before-after slider

**Email Capture Form:**
```
Layout:
- Headline: "Get 3 Free Presets"
- Subheadline: "Join 500+ photographers. No spam."
- Form fields:
  - Email (required)
  - First name (optional)
  - Photography type: dropdown (Landscape, Portrait, etc) [optional]
- CTA button: "Download Free Presets"
- Privacy note: "We respect your inbox."
```

**Post-Submit Flow:**
1. Form submitted
2. Backend validation
3. User created (if new)
4. Confirmation email sent
   - "Thanks! Check your email..."
   - Download links for 3 presets
   - Installation guide
   - Discount code: "WELCOME15" (15% off)
   - Social follow CTA

**Email Content:**
- Subject: "Your 3 Free Presets Are Ready ✨"
- Body:
  - Welcome message
  - 3 download links
  - Brief installation guide
  - "Upgrade to premium" soft sell
  - Social links

---

### G. HOW TO USE PAGE

**Purpose:** Help users install and use presets

**Sections:**

1. **Installation Guide**
   - For Lightroom Classic (step-by-step)
   - For Lightroom CC (step-by-step)
   - For Lightroom Mobile (step-by-step)
   - Screenshots for each step
   - Video embed (YouTube)

2. **Using Presets**
   - Basic tips (exposure adjustment, etc)
   - Combining presets
   - Creating custom variations
   - Exporting settings

3. **Troubleshooting**
   - "Preset not showing up"
   - "Color doesn't match"
   - "File won't open"
   - "Support contact"

4. **FAQ**
   - "Which Lightroom version do I need?"
   - "Can I use on multiple computers?"
   - "Can I share presets?"
   - "Money-back guarantee?"
   - "Do presets work on RAW/JPG?"
   - Contact support link

---

### H. ABOUT PAGE

**Sections:**

1. **Story / Origin**
   - Who you are
   - Why you created presets
   - Photography journey (brief)
   - 2-3 paragraphs max

2. **Values / Philosophy**
   - Quality first
   - Simplicity
   - Customer-first
   - 3 core values

3. **Social Proof**
   - If available: testimonials
   - Photography statistics
   - Following count
   - Contact/social links

---

### I. SHOPPING CART

**Features:**
- Persistent cart (localStorage or logged-in user)
- Cart icon in header shows item count
- Cart page shows:
  - Items: preset/bundle thumbnail, name, price, quantity, remove button
  - Subtotal
  - Tax (if applicable)
  - Total
  - "Proceed to Checkout" button
  - "Continue Shopping" button

**Cart Rules:**
- Presets: quantity 1 only (can't buy same preset twice)
- If already owned, show "You already own this" message

---

### J. CHECKOUT

**Page Flow:**
1. **Cart Review** (pre-filled if coming from cart)
   - List items
   - Prices visible
   - Can edit quantities

2. **Customer Info**
   - Email
   - Name
   - Country (for tax/compliance)
   - Billing address (if required)

3. **Payment**
   - Stripe integration (card payment)
   - "Pay $XX.XX" button
   - Loading state

4. **Confirmation**
   - Order number
   - Thank you message
   - Download links (for digital files)
   - Email confirmation notice
   - Installation guide link
   - Support contact

---

### K. USER ACCOUNT PAGE (Logged In)

**Profile Section:**
- Display name
- Email
- Password change
- Delete account

**Purchase History:**
- List of orders
- Order date, amount, presets purchased
- Download links (access files again)
- Receipt (PDF downloadable)

**Email Preferences:**
- Subscribe/unsubscribe to marketing emails
- Email frequency preference

---

### L. AUTHENTICATION

**Sign Up:**
- Email + password
- Validate email uniqueness
- Send confirmation email
- Store password hashed (bcrypt)

**Login:**
- Email + password
- Remember me (optional)
- Forgot password (reset link via email)

**OAuth (Future):**
- Google login option
- Social account linking

---

## 3. DATA DISPLAY SPECIFICATIONS

### Gallery Gallery Grid
```
Mobile (1 column):
- Image width: 100% of screen
- 1 image per row
- Load 10 images initially

Tablet (2 columns):
- Image width: 48% each with gap
- 2 images per row
- Load 20 images initially

Desktop (3-4 columns):
- Image width: responsive to grid
- 3-4 images per row
- Load 20 images initially
```

### Image Optimization
- Format: JPEG with WebP fallback
- Thumbnail: max 400px width, 300KB
- Full: max 1200px width, 500KB
- Before-after pair: 600KB combined
- Lazy loading with blur-up placeholder

---

## 4. SEARCH & FILTERING LOGIC

### Preset Search
- Query field: search by preset name
- Returns: matching presets only
- Real-time (debounced 300ms)

### Gallery Filters
- Preset filter: single select (OR logic if multi-select future)
- Category filter: single select
- Both filters combined: AND logic
- Reset button: clears all filters

### Filter Persistence
- URL parameters: ?preset=warm-golden&category=landscape
- Bookmarkable filters
- Share filtered gallery link

---

## 5. PERFORMANCE REQUIREMENTS

| Metric | Target | Priority |
|---|---|---|
| Home page load | <2s (LCP) | High |
| Gallery first load | <2s | High |
| Image lazy load | <1s per 20 images | High |
| Checkout load | <1s | High |
| API response | <200ms | Medium |
| Lighthouse score | 90+ | Medium |

---

## 6. SECURITY REQUIREMENTS

- [ ] HTTPS only
- [ ] Password hashing (bcrypt)
- [ ] CSRF protection
- [ ] Rate limiting on API (prevent abuse)
- [ ] Email validation (prevent spam signup)
- [ ] Payment PCI compliance (Stripe handles)
- [ ] File access control (only purchased files)

---

## 7. MOBILE RESPONSIVENESS

**Breakpoints:**
- Mobile: 0-640px
- Tablet: 641-1024px
- Desktop: 1025px+

**Mobile-Specific:**
- Single column layouts
- Collapsible filters
- Large touch targets (44px minimum)
- Optimized images (smaller file sizes)
- No hover states (touch-friendly)

---

## 8. ANALYTICS & TRACKING

**Events to track:**
- Page views (GA4)
- Free preset downloads
- Add to cart
- Checkout initiated
- Purchase completed
- Preset details viewed
- Gallery filters used

**Metrics to monitor:**
- Conversion funnel (visitor → free → paid)
- Average order value (AOV)
- Cart abandonment rate
- Email conversion rate
- Most popular presets
- Traffic sources

---

## 9. EMAIL AUTOMATION SEQUENCE

### Welcome Sequence (Free Preset Subscriber)
**Email 1 (immediate):**
- Subject: "Your 3 Free Presets Are Ready ✨"
- Body: Welcome + download links + installation guide
- CTA: "Get Started with Presets"

**Email 2 (Day 3):**
- Subject: "One preset away from the perfect look"
- Body: Showcase popular paid preset
- CTA: "Explore Premium Presets"
- Discount: "WELCOME15" (15% off)

**Email 3 (Day 7):**
- Subject: "How I created presets for 10,000 photos"
- Body: Your story / brand story
- CTA: "Learn About Me"

### Promotional Sequence
**On new preset launch:**
- Email to list: "New preset: [Name]"
- Early access: 24h discount code
- Features + benefits
- Gallery link + CTA

---

## 10. FUTURE FEATURES (Phase 2+)

- [ ] Video tutorials (YouTube embedded)
- [ ] Blog/SEO content
- [ ] User testimonials/reviews
- [ ] Affiliate program
- [ ] Preset customization service
- [ ] Presets for Capture One, Adobe Camera Raw
- [ ] Community forum / user gallery
- [ ] Advanced analytics dashboard
- [ ] Subscription model option
- [ ] Desktop app for preset management
- [ ] Mobile app

---

**Document Version:** 1.0  
**Next Update:** After MVP launch feedback
