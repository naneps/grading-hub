# Project Timeline & Development Checklist
## Preset Lightroom E-Commerce Platform

**Version:** 1.0  
**Start Date:** May 20, 2026  
**Target Launch:** August 20, 2026 (3 months, santai)

---

## PHASE 0: PRE-DEVELOPMENT (Week 1-2)

### Week 1: Assets & Branding Preparation

#### Preset Management
- [ ] Export all presets from Lightroom
  - [ ] Lightroom Classic export
  - [ ] Organize with naming convention: `andrian_[name]_v1.0.lrtemplate`
  - [ ] Create preset inventory spreadsheet
  - [ ] Decide which 3 presets for free tier
  - [ ] Decide bundle groupings (5-preset, all-preset)

#### Image Assets
- [ ] Organize 1000 photos (folder structure)
- [ ] Tag metadata (preset name, category, camera)
- [ ] Select 3 best before-after per preset (before-after pairs)
- [ ] Resize & optimize images for web:
  - [ ] Full size: max 1200px, 80% JPG quality (~300KB each)
  - [ ] Thumbnail: max 400px, 70% JPG quality (~100KB each)
  - [ ] Create webp variants
  - [ ] Total before-after pairs: presets × 3
  - [ ] Use ImageOptim or batch script

#### Branding
- [ ] Finalize brand name
- [ ] Design logo (or commission designer)
- [ ] Choose color palette (3-4 colors)
- [ ] Select typography (2 fonts: heading + body)
- [ ] Create brand guide (PDF, 1-2 pages):
  - [ ] Logo usage
  - [ ] Color codes (hex, rgb)
  - [ ] Font specifications
  - [ ] Photography style
  - [ ] Tone of voice

#### Content Prep
- [ ] Write brand story (100 words for About page)
- [ ] Write product descriptions (per preset, 2-3 sentences)
- [ ] Write bundle descriptions
- [ ] Create FAQ content (10-15 questions)
- [ ] Write installation guides (with screenshots)
- [ ] Create privacy policy & terms of service (template)

**Owner:** You  
**Deadline:** May 27, 2026

---

### Week 2: Development Setup & Design

#### Development Environment
- [ ] Create GitHub repo (monorepo structure)
  ```
  preset-lightroom/
  ├── frontend/ (Nuxt 3)
  ├── backend/ (Laravel 11)
  ├── docs/ (this documentation)
  └── .gitignore, README.md
  ```
- [ ] Setup Nuxt 3 project with:
  - [ ] Tailwind CSS
  - [ ] Pinia (state management)
  - [ ] VeeValidate + Zod
  - [ ] axios interceptor
  - [ ] image-compare library
- [ ] Setup Laravel 11 project with:
  - [ ] Sanctum (auth)
  - [ ] Stripe SDK
  - [ ] SendGrid (Mailable)
  - [ ] .env configuration
  - [ ] Database migrations

#### Database Setup
- [ ] Create MySQL database (local)
- [ ] Run migrations (create all tables)
- [ ] Seed test data:
  - [ ] 5 test presets
  - [ ] 2 test bundles
  - [ ] 2 test users

#### UI/UX Design
- [ ] Create Figma mockups (or wireframes):
  - [ ] Home page
  - [ ] Gallery page
  - [ ] Preset catalog
  - [ ] Single preset page
  - [ ] Checkout flow
  - [ ] Account dashboard
- [ ] Mobile responsive sketches
- [ ] Component library (reusable buttons, cards, forms)

#### Stripe Setup
- [ ] Create Stripe account
- [ ] Create test API keys
- [ ] Configure webhook endpoints
- [ ] Test payment flow locally

#### SendGrid Setup
- [ ] Create SendGrid account
- [ ] Verify sender domain
- [ ] Create API key
- [ ] Setup email templates (Welcome, Order Confirmation, etc)

**Owner:** You  
**Deadline:** June 3, 2026

---

## PHASE 1: CORE DEVELOPMENT (Week 3-5)

### Week 3: Backend Foundation & Frontend Setup

#### Backend - Authentication & Users
- [ ] User model migration
- [ ] Registration endpoint (`POST /api/auth/register`)
  - [ ] Email validation
  - [ ] Password hashing
  - [ ] Return JWT token
- [ ] Login endpoint (`POST /api/auth/login`)
  - [ ] Email/password validation
  - [ ] Token generation
- [ ] Get current user (`GET /api/auth/me`)
- [ ] Logout endpoint
- [ ] Middleware: auth token validation
- [ ] Tests: auth endpoints working

#### Backend - Presets & Images
- [ ] Preset model & migration
- [ ] Preset image model & migration
- [ ] Bundle model & migration
- [ ] Bundle-Preset pivot table
- [ ] Seed test presets (5-10 presets)
- [ ] Seed test images (at least 15 before-after pairs)
- [ ] `GET /api/presets` (list with filters)
  - [ ] Filter: category, price
  - [ ] Sort: newest, popular, price
  - [ ] Pagination: 12 per page
- [ ] `GET /api/presets/:id` (single preset)
- [ ] `GET /api/images` (gallery with pagination)
  - [ ] Filter: preset, category
  - [ ] Sort: newest, popular
  - [ ] Lazy loading (page-based)
- [ ] Tests: preset endpoints

#### Frontend - Setup & Navigation
- [ ] Project structure created
- [ ] Global styles (Tailwind, brand colors)
- [ ] Header component (navigation, logo, cart icon)
- [ ] Footer component (links, social)
- [ ] Layout wrapper (consistent across pages)
- [ ] Router setup:
  - [ ] `/` (home)
  - [ ] `/gallery` (gallery)
  - [ ] `/presets` (catalog)
  - [ ] `/presets/[slug]` (single preset)
  - [ ] `/checkout` (checkout)
  - [ ] `/account` (user dashboard)

#### Frontend - Home Page
- [ ] Hero section (image + CTA)
- [ ] Free preset CTA (prominent)
- [ ] Email capture form (working)
- [ ] Feature highlights section
- [ ] Featured presets showcase (4 cards)
- [ ] Social proof section
- [ ] Responsive mobile/tablet/desktop

**Owner:** You  
**Deadline:** June 10, 2026

---

### Week 4: Gallery & Preset Catalog

#### Backend - Email Subscriptions
- [ ] Email subscription model & migration
- [ ] `POST /api/subscribe` (email capture)
  - [ ] Validation (unique email)
  - [ ] Generate confirmation token
  - [ ] Send welcome email (SendGrid)
- [ ] `POST /api/confirm-email` (confirm subscription)
- [ ] `POST /api/unsubscribe` (remove email)
- [ ] Email service setup (Laravel Mailable)

#### Frontend - Gallery Page
- [ ] Gallery grid component
  - [ ] Responsive layout (1/2/3-4 columns)
  - [ ] Lazy loading (load 20, then on scroll)
  - [ ] Image placeholders (blur-up)
- [ ] Filter sidebar
  - [ ] Category dropdown
  - [ ] Preset dropdown
  - [ ] Reset button
- [ ] Image lightbox modal
  - [ ] Before-after slider (interactive)
  - [ ] Prev/next navigation
  - [ ] Preset info (name, category)
  - [ ] Add to cart button
- [ ] Sorting (newest, popular)
- [ ] Display count ("Showing X / Y images")
- [ ] Mobile: filter toggle (collapsible)

#### Frontend - Preset Catalog Page
- [ ] Preset grid (3-4 columns, responsive)
- [ ] Preset card component:
  - [ ] Thumbnail, name, category, price
  - [ ] "View Details" button
  - [ ] "Add to Cart" button
- [ ] Filter/sort (same as gallery)
- [ ] Pagination (12 per page)
- [ ] Mobile responsive

#### Frontend - Single Preset Page
- [ ] Preset image gallery (main + thumbnails)
- [ ] Before-after slider on hover
- [ ] Product info section:
  - [ ] Name, category, price
  - [ ] Description (formatted text)
  - [ ] Key features (bullets)
  - [ ] Best for: use cases
  - [ ] Compatibility info
  - [ ] Adjustment intensity badge
- [ ] Installation guide (expandable)
- [ ] Related presets carousel
- [ ] "Add to Cart" button
- [ ] "View in gallery" link
- [ ] Mobile responsive

**Owner:** You  
**Deadline:** June 17, 2026

---

### Week 5: Shopping Cart & Checkout

#### Backend - Orders & Payments
- [ ] Order model & migration
- [ ] Order item model & migration
- [ ] User downloads model & migration
- [ ] `POST /api/cart/items` (add to cart)
- [ ] `GET /api/cart` (get current cart)
- [ ] `DELETE /api/cart/items/:id` (remove from cart)
- [ ] `POST /api/orders` (create order from cart)
  - [ ] Validate cart items
  - [ ] Calculate totals
  - [ ] Create order record
  - [ ] Return Stripe payment intent
- [ ] Stripe webhook handler (`/webhooks/stripe`)
  - [ ] Listen: payment_intent.succeeded
  - [ ] Update order status → completed
  - [ ] Create user_downloads records
  - [ ] Send confirmation email
- [ ] `GET /api/downloads` (user's purchased presets)
- [ ] `GET /api/downloads/:preset_id/url` (get pre-signed download URL)

#### Frontend - Shopping Cart
- [ ] Cart page component
  - [ ] Display cart items (thumbnail, name, price)
  - [ ] Quantity selector (mostly 1)
  - [ ] Remove button
  - [ ] Subtotal, tax, total
  - [ ] "Proceed to Checkout" button
  - [ ] "Continue Shopping" button
- [ ] Cart persistence (localStorage + API if logged in)
- [ ] Cart icon update on add/remove
- [ ] Mobile responsive

#### Frontend - Checkout Page
- [ ] Order review section (items, prices)
- [ ] Customer info form:
  - [ ] Email (prefilled if logged in)
  - [ ] Name
  - [ ] Country (dropdown)
  - [ ] Validation
- [ ] Coupon code input (optional for now)
- [ ] Stripe payment element
  - [ ] Card input
  - [ ] Billing address (optional)
  - [ ] Loading state
- [ ] Error handling (payment failed)
- [ ] Confirmation page after success
  - [ ] Order number, thank you
  - [ ] Download links
  - [ ] Installation guide link
  - [ ] Support contact

#### Frontend - Account Dashboard
- [ ] Login/register pages (basic)
- [ ] Account page (protected route):
  - [ ] Profile info (name, email)
  - [ ] Purchase history (orders list)
  - [ ] Download links (for each preset)
  - [ ] Email preferences
  - [ ] Password change
- [ ] Mobile responsive

**Owner:** You  
**Deadline:** June 24, 2026

---

## PHASE 2: INTEGRATION & TESTING (Week 6-7)

### Week 6: Full Integration & Polish

#### Frontend-Backend Integration
- [ ] Test all API endpoints end-to-end
- [ ] Fix CORS issues (if any)
- [ ] Test authentication flow (register → login → protected routes)
- [ ] Test cart → checkout → payment flow
- [ ] Test email capture (free presets)
- [ ] Test file downloads

#### Email Automation
- [ ] SendGrid templates:
  - [ ] Welcome (free preset download)
  - [ ] Order confirmation
  - [ ] Password reset
- [ ] Send test emails
- [ ] Test email links working

#### Performance Optimization
- [ ] Image optimization (verify file sizes)
- [ ] Lazy loading gallery (test performance)
- [ ] API response optimization
- [ ] Frontend bundle size (check Lighthouse)
- [ ] Database query optimization (avoid N+1)

#### Security
- [ ] HTTPS setup (local: mkcert)
- [ ] CSRF protection (Laravel + Nuxt)
- [ ] Rate limiting (API endpoints)
- [ ] Input validation (all forms)
- [ ] Password hashing test
- [ ] Stripe PCI compliance verification

#### Responsive Design
- [ ] Test mobile (iPhone 12, 14)
- [ ] Test tablet (iPad)
- [ ] Test desktop (1920px, 1366px)
- [ ] Navigation responsive
- [ ] Forms touch-friendly (44px min buttons)
- [ ] Images responsive (srcset)

#### Content Upload
- [ ] Upload all preset files to Cloudflare R2:
  - [ ] Preset files (.lrtemplate, .xmp, .dng)
  - [ ] Before-after images (full + thumbnail)
  - [ ] Brand assets (logo, images)
- [ ] Generate pre-signed URLs
- [ ] Test downloads working

**Owner:** You  
**Deadline:** July 1, 2026

---

### Week 7: Testing & Bug Fixes

#### QA Testing
- [ ] Functional testing (all features working)
- [ ] Edge case testing:
  - [ ] Duplicate preset purchase
  - [ ] Cart abandonment
  - [ ] Payment failure scenarios
  - [ ] Email unsubscribe
- [ ] Browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile app testing (iOS Safari, Chrome Android)

#### User Testing (Optional)
- [ ] 5-10 users test flow (friends/beta testers)
- [ ] Collect feedback:
  - [ ] Is CTA clear?
  - [ ] Is checkout smooth?
  - [ ] Are presets easy to understand?
  - [ ] Any bugs or friction?
- [ ] Document issues & prioritize fixes

#### Staging Deployment
- [ ] Deploy frontend to staging environment
- [ ] Deploy backend to staging VPS
- [ ] Setup staging database
- [ ] Test everything on staging (production-like environment)
- [ ] Configure SSL/HTTPS on staging

#### Documentation
- [ ] User guide (how to install presets)
- [ ] FAQ finalized
- [ ] Terms & Privacy Policy final
- [ ] Admin guide (how to manage presets, bundles)
- [ ] README.md for GitHub

#### Bug Fixes & Polish
- [ ] Fix any critical bugs found
- [ ] Polish UI (spacing, colors, animations)
- [ ] Test all payment scenarios
- [ ] Test all email flows

**Owner:** You  
**Deadline:** July 8, 2026

---

## PHASE 3: LAUNCH PREPARATION (Week 8)

### Week 8: Pre-Launch Setup

#### Production Deployment
- [ ] Setup production database (MySQL)
- [ ] Configure production VPS (Nginx, SSL, monitoring)
- [ ] Deploy backend to production
- [ ] Deploy frontend to production
- [ ] Setup DNS records (domain)
- [ ] Configure CDN (Cloudflare)
- [ ] Setup email service (SendGrid production)
- [ ] Stripe live API keys configured
- [ ] Backup system configured

#### Analytics & Monitoring
- [ ] Google Analytics 4 setup
- [ ] Sentry error tracking setup
- [ ] Uptime monitoring (Better Uptime)
- [ ] Server monitoring (Basic: CPU, memory, disk)

#### Pre-Launch Checklist
- [ ] Website loads without errors
- [ ] Payment processing works (test transaction)
- [ ] Email delivery working (test email)
- [ ] Download links working
- [ ] Mobile responsive
- [ ] Lighthouse score 80+
- [ ] Page load time <2s
- [ ] All links working
- [ ] No 404 errors

#### Soft Launch (Friends/Beta)
- [ ] Invite 10-20 friends to test
- [ ] Share link via email
- [ ] Collect feedback (brief survey)
- [ ] Monitor error logs
- [ ] Fix any issues found

#### Marketing Prep
- [ ] Social media posts drafted (Instagram, TikTok captions)
- [ ] Email announcement drafted (to newsletter if you have one)
- [ ] Create landing page content (if needed)
- [ ] Prepare "launch day" content (before-after carousel)
- [ ] Setup Instagram Stories (behind-the-scenes)

#### Public Launch
- [ ] Announce on Instagram/TikTok
- [ ] Share gallery showcase post
- [ ] Engage with comments
- [ ] Email announcement (if you have existing list)
- [ ] Monitor website performance
- [ ] Monitor customer emails/support

**Owner:** You  
**Deadline:** August 8, 2026

---

## POST-LAUNCH (Week 9+)

### Week 9-12: Growth & Optimization

#### Monitoring & Analytics
- [ ] Track daily metrics:
  - [ ] Visitors
  - [ ] Free preset downloads
  - [ ] Conversion rate (free → paid)
  - [ ] Sales
  - [ ] Popular presets
- [ ] Weekly review (every Sunday)

#### Customer Support
- [ ] Monitor customer emails
- [ ] Respond to inquiries within 24h
- [ ] Collect feedback
- [ ] Document common questions

#### Email Marketing
- [ ] Send welcome sequence to free users (day 1, 3, 7)
- [ ] Send promotional emails (2-3/month)
- [ ] Monitor open rates, click rates
- [ ] A/B test subject lines

#### Growth Tactics
- [ ] Share user-generated content (repost)
- [ ] Respond to comments/DMs
- [ ] Engage with photography community
- [ ] Consider: Instagram Stories, TikTok videos
- [ ] Affiliate partnerships (future)

#### Optimization
- [ ] Fix any remaining bugs
- [ ] Optimize conversion funnel
- [ ] Test pricing changes (if needed)
- [ ] A/B test homepage CTA
- [ ] Improve email sequences

---

## DEVELOPMENT CHECKLIST BY COMPONENT

### Frontend Components
- [ ] Header (nav, logo, cart, account)
- [ ] Footer
- [ ] Hero section
- [ ] Feature highlights
- [ ] Preset card
- [ ] Image grid
- [ ] Lightbox modal
- [ ] Filter sidebar
- [ ] Form components (email, checkout)
- [ ] Before-after slider
- [ ] Carousel (related presets)
- [ ] Toast notifications
- [ ] Loading spinners

### Backend Endpoints
- [ ] Auth: register, login, logout, me
- [ ] Presets: list, single, filters
- [ ] Images: gallery with pagination
- [ ] Cart: add, remove, get
- [ ] Orders: create, list
- [ ] Downloads: list, get URL
- [ ] Email: subscribe, confirm, unsubscribe
- [ ] Webhooks: Stripe payment confirmation

### Database Migrations
- [ ] Users table
- [ ] Presets table
- [ ] Preset images table
- [ ] Bundles table
- [ ] Bundle presets (pivot)
- [ ] Orders table
- [ ] Order items table
- [ ] User downloads table
- [ ] Email subscriptions table
- [ ] Indexes on frequently queried columns

### External Integrations
- [ ] Stripe (payment)
- [ ] SendGrid (email)
- [ ] Cloudflare R2 (file storage)
- [ ] Google Analytics (tracking)
- [ ] Sentry (error monitoring)

---

## RISKS & CONTINGENCY

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Image optimization delays | Medium | 2-3 days | Start batch processing early |
| Stripe API issues | Low | Critical | Have Midtrans backup ready |
| Email delivery problems | Low | Medium | Test SendGrid extensively |
| Payment test failures | Medium | 1-2 days | Have test account ready |
| Scope creep | High | 2+ weeks | Stick to MVP, defer phase 2 |
| Unexpected bugs | High | 2-3 days | Buffer time in week 7 for testing |

---

## SUCCESS CRITERIA

### By Launch (Week 8)
- ✅ Website fully functional
- ✅ Payment processing working
- ✅ All pages responsive
- ✅ No critical bugs
- ✅ Page load <2s
- ✅ Email delivery working

### By Month 1 Post-Launch
- ✅ 100+ free preset downloads
- ✅ 5-10 paid conversions
- ✅ 0 customer complaints (quality)
- ✅ Analytics setup & working
- ✅ Email list: 200+ subscribers

### By Month 3 Post-Launch
- ✅ 500+ free preset downloads
- ✅ 30-50 paid conversions
- ✅ 2-5% conversion rate (free → paid)
- ✅ $1,000+ revenue
- ✅ 500+ email subscribers
- ✅ Positive feedback / testimonials

---

## DEPENDENCIES & ASSUMPTIONS

**Assumptions:**
- All presets ready & tested
- 1000 photos available
- All images optimized by Week 1
- Stripe account accessible
- SendGrid account setup smooth
- VPS accessible (DigitalOcean/Linode)

**External Dependencies:**
- Stripe API uptime
- SendGrid email delivery
- Cloudflare R2 availability
- Domain registrar (domain available)

---

**Document Version:** 1.0  
**Last Updated:** May 18, 2026  
**Next Review:** June 3, 2026 (end of phase 0)
