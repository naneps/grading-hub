# User Stories & Use Cases
## Preset Lightroom E-Commerce Platform

**Version:** 1.0  
**Date:** May 18, 2026

---

## 1. USER PERSONAS

### Persona 1: "Hobby Harry" - Amateur Photographer
- Age: 28, hobbyist photographer
- Pain point: Color grading is confusing, wants consistent results
- Motivation: Save time, improve photo quality
- Budget: Willing to spend $10-20/month on presets
- Tech comfort: Medium
- Primary platform: Instagram, occasional photography walks

**Goals with product:**
- Download free presets to try
- Find presets for landscape/travel photography
- Simple installation process
- Quick results without learning curve

---

### Persona 2: "Creative Clara" - Content Creator
- Age: 24, Instagram/TikTok creator
- Pain point: Needs consistent aesthetic across photos
- Motivation: Build brand identity, increase engagement
- Budget: $20-50 for tool suite
- Tech comfort: High
- Primary platform: Instagram, TikTok, YouTube

**Goals with product:**
- Browse gallery for inspiration
- Purchase bundle of presets
- Use presets across multiple photos
- Share results with community

---

### Persona 3: "Professional Pete" - Professional Photographer
- Age: 42, professional photographer
- Pain point: Workflow efficiency, consistent color grading
- Motivation: Save editing time, better client results
- Budget: $50-100+ for professional tools
- Tech comfort: High
- Primary platform: Website, client delivery

**Goals with product:**
- Review before-after samples for quality assurance
- Purchase all presets (bundle)
- Integrate into workflow
- Technical compatibility information

---

## 2. USER STORIES

### Free Preset Download Flow

**US-1: User Discovers Free Presets**
```
AS A        photographer interested in presets
WHEN        I visit the website
THEN        I see prominent free preset offer
AND         I understand what presets are
SO THAT     I'm encouraged to download and try
```
**Acceptance Criteria:**
- Home page has free preset CTA above fold
- Clear messaging: "Get 3 free presets, no credit card needed"
- Preview of free presets visible (before-after)

---

**US-2: User Downloads Free Presets**
```
AS A        photographer wanting to try presets
WHEN        I click "Download Free Presets"
THEN        I see email capture form
AND         I enter email (+ optional name)
AND         I receive email with download links
SO THAT     I can install and use presets immediately
```
**Acceptance Criteria:**
- Modal/form appears with email input
- Email validation works
- No credit card required
- Confirmation email sent within 1 minute
- Email contains 3 download links + installation guide
- Download links valid for 14 days

---

**US-3: User Confirms Email**
```
AS A        user who signed up for free presets
WHEN        I receive confirmation email
AND         I click confirmation link
THEN        my email is marked as confirmed
AND         I can access account dashboard
SO THAT     I can manage my downloads and preferences
```
**Acceptance Criteria:**
- Confirmation link works (24h expiration)
- After confirmation, user can log in
- Confirmation page shows success message
- User added to email list

---

### Preset Discovery & Browsing

**US-4: User Explores Gallery**
```
AS A        photographer looking for preset ideas
WHEN        I visit the gallery page
THEN        I see 1000+ before-after photos
AND         I can filter by preset or category
AND         images load smoothly
SO THAT     I can explore and find presets I like
```
**Acceptance Criteria:**
- Gallery loads with 20 images (lazy load)
- Filter by preset (dropdown)
- Filter by category (dropdown/buttons)
- Mobile responsive (1 column)
- Desktop responsive (3-4 columns)
- Click image to view full size + before-after slider
- "Load more" or infinite scroll working

---

**US-5: User Filters Gallery**
```
AS A        photographer looking for specific style
WHEN        I use filter dropdowns
THEN        gallery updates to show only matching images
AND         URL updates for shareable links
SO THAT     I can find presets matching my aesthetic
```
**Acceptance Criteria:**
- Category filter works (landscape, portrait, etc.)
- Preset filter works
- Filters combine (AND logic)
- Results update without page reload
- Reset button clears filters
- Filters persist in URL (?preset=warm&category=landscape)
- Display count: "Showing 45 / 1000 images"

---

**US-6: User Views Image Details**
```
AS A        photographer interested in specific preset
WHEN        I click image in gallery
THEN        lightbox modal opens
AND         I see before-after slider
AND         I see preset name + description
AND         I see "Add to Cart" button
SO THAT     I can decide to purchase and checkout
```
**Acceptance Criteria:**
- Lightbox opens with full-size image
- Before-after slider draggable/clickable
- Preset name, category, price visible
- "Add to Cart" button prominent
- Navigation: prev/next image in lightbox
- Close button (X or ESC key)

---

### Preset Browsing & Purchase

**US-7: User Browses Preset Catalog**
```
AS A        photographer wanting to buy presets
WHEN        I visit presets catalog page
THEN        I see all presets in grid layout
AND         I can filter by category/price
AND         I can sort by newest/popular/price
SO THAT     I can find and compare presets
```
**Acceptance Criteria:**
- Preset grid with 3-4 columns (responsive)
- Each preset card shows: thumbnail, name, category, price
- Filter by: category, price range, compatibility
- Sort options: newest, popular, price (asc/desc)
- 12 presets per page (pagination)
- "Add to Cart" button on each card

---

**US-8: User Views Preset Details**
```
AS A        photographer considering a purchase
WHEN        I click preset card or "View Details"
THEN        I see detailed preset page
AND         I see multiple before-after images
AND         I see compatibility info
AND         I see installation instructions
SO THAT     I can make informed purchasing decision
```
**Acceptance Criteria:**
- Preset page loads with gallery (5 before-after images)
- Main image with slider on hover
- Thumbnail gallery below (3-5 images)
- Description: what the preset does (2-3 paragraphs)
- Key features (bullet points)
- Best for: use cases
- Compatibility: Lightroom Classic ✓, CC ✓, Mobile ✓
- Adjustment intensity: Light/Medium/Strong
- Installation guide (expandable section with screenshots)
- "View in Gallery" link (show all gallery images for this preset)
- Related presets section (3-4 similar presets)
- "Add to Cart" button (prominent)

---

**US-9: User Views Bundle Details**
```
AS A        photographer wanting multiple presets
WHEN        I view bundle page
THEN        I see all presets included
AND         I see bundle benefit copy
AND         I see total value if bought individually
AND         I see savings percentage
SO THAT     I understand the value proposition
```
**Acceptance Criteria:**
- Bundle name, description
- List of presets included (with thumbnails)
- Bundle price (large, prominent)
- Original value if bought separately
- Savings: "Save 20%"
- "Add to Cart" button
- "View individual presets" link

---

### Shopping Cart & Checkout

**US-10: User Adds Item to Cart**
```
AS A        photographer ready to buy
WHEN        I click "Add to Cart" on preset/bundle
THEN        item added to cart (no page reload)
AND         cart icon updates with count
AND         success notification appears
SO THAT     I can continue browsing or checkout
```
**Acceptance Criteria:**
- Cart updated immediately (visual feedback)
- Cart count updated in header
- Toast notification: "Added to cart"
- No duplicate items in cart (quantity increases instead)
- Cart persists across page navigation
- Works for both presets and bundles

---

**US-11: User Reviews Cart**
```
AS A        customer ready to purchase
WHEN        I click cart icon or visit /cart
THEN        I see all items with prices
AND         I see subtotal, tax, total
AND         I can modify quantities or remove items
SO THAT     I can finalize my purchase
```
**Acceptance Criteria:**
- Cart page shows all items
- Each item: thumbnail, name, price, quantity selector, remove button
- Subtotal calculation correct
- Tax calculation (if applicable)
- Total amount clear
- "Proceed to Checkout" button
- "Continue Shopping" button
- Remove item function works
- Quantity cannot exceed 1 per preset (no duplicates)

---

**US-12: User Checks Out**
```
AS A        customer completing purchase
WHEN        I click "Proceed to Checkout"
THEN        I see checkout form (if not logged in)
AND         I enter email, name, country
AND         I proceed to payment
SO THAT     I can pay with credit card
```
**Acceptance Criteria:**
- Checkout page shows order review
- Email field (prefilled if logged in)
- Name field
- Country dropdown
- Coupon code field (optional)
- "Proceed to Payment" button
- Form validation (required fields)
- Error handling for invalid email

---

**US-13: User Pays with Stripe**
```
AS A        customer with order ready
WHEN        I click "Pay $XX.XX"
THEN        Stripe payment modal opens
AND         I enter card details
AND         payment processed
AND         order confirmed
SO THAT     I own the presets
```
**Acceptance Criteria:**
- Stripe Payment Element loads
- Card field secure (PCI compliant)
- Processing state shows spinner
- Success: order confirmation page
- Failure: error message with retry option
- Confirmation email sent immediately
- Download links provided on confirmation page

---

**US-14: User Receives Confirmation**
```
AS A        customer who just purchased
WHEN        payment completes
THEN        confirmation page shown
AND         confirmation email sent
AND         download links provided
SO THAT     I can download presets immediately
```
**Acceptance Criteria:**
- Confirmation page shows: order number, thanks message
- Download links for each preset
- Installation guide link
- Support contact link
- Email sent within 1 minute
- Email contains same download info
- Links valid for 30 days (can re-download anytime)

---

### Account & Download Management

**US-15: User Views Purchase History**
```
AS A        customer who purchased before
WHEN        I visit my account dashboard
THEN        I see all past orders
AND         I see order date, amount, presets
AND         I can download files again
SO THAT     I can re-download if needed
```
**Acceptance Criteria:**
- Account page accessible (login required)
- List of all orders (newest first)
- Each order: date, total, presets purchased
- "Download" button for each order
- Download links work multiple times (no limit)
- Links never expire (one-time purchase)

---

**US-16: User Manages Email Preferences**
```
AS A        user receiving emails
WHEN        I visit account settings
THEN        I see email preference options
AND         I can choose frequency (weekly/monthly/promotional)
AND         I can unsubscribe
SO THAT     I control email communication
```
**Acceptance Criteria:**
- Email preferences section on account page
- Subscribe/unsubscribe toggle
- Frequency dropdown: daily/weekly/monthly/promotional only
- Changes saved immediately
- Unsubscribe link in every email
- Unsubscribe form works from email link

---

### Email Marketing

**US-17: User Receives Welcome Sequence**
```
AS A        user who downloaded free presets
WHEN        I sign up email list
THEN        I receive welcome email (immediate)
AND         I receive follow-up emails (day 3, 7)
SO THAT     I'm introduced to premium presets
```
**Acceptance Criteria:**
- Welcome email: "Your presets are ready" + download + guide
- Email 2 (day 3): "Try premium presets" + discount code
- Email 3 (day 7): "My story" + about the brand
- All emails professional, on-brand
- Unsubscribe link in each email
- Sent from verified domain (noreply@...)
- Tracked opens/clicks (optional)

---

**US-18: User Receives Promotional Emails**
```
AS A        subscribed user
WHEN        new preset launched
THEN        I receive announcement email
AND         I see early access discount code
AND         I can purchase easily from email
SO THAT     I'm aware of new products
```
**Acceptance Criteria:**
- Email sent 24h after launch
- Early access discount: 15% off for 24h
- Subject line compelling
- CTA button prominent
- Links to product page
- Unsubscribe option available

---

## 3. USE CASES

### Use Case 1: "Discover and Purchase"
**Actor:** Hobby Harry (amateur photographer)

**Preconditions:**
- User found website via Instagram
- User has Lightroom installed

**Flow:**
1. User lands on homepage
2. Sees "Download 3 Free Presets" CTA
3. Clicks button → email signup form
4. Enters email → receives confirmation email
5. Clicks link in email → downloads 3 free presets
6. Installs presets in Lightroom
7. Tries presets on photos → impressed
8. Returns to website
9. Browses preset catalog
10. Sees "Warm Golden" preset in gallery
11. Clicks image → sees before-after slider
12. Impressed → clicks "Add to Cart"
13. Proceeds to checkout
14. Enters email, pays with card
15. Downloads paid preset
16. Uses in workflow → success

**Result:** Converts free user → paid customer

---

### Use Case 2: "Browse and Inspire"
**Actor:** Creative Clara (content creator)

**Preconditions:**
- User discovered via TikTok/Instagram
- Building brand aesthetic

**Flow:**
1. User visits gallery
2. Filters by "Moody" category
3. Browses 200+ moody images
4. Sees multiple presets she likes
5. Clicks "Presets" catalog
6. Filters by category (moody)
7. Reviews 5 moody presets
8. Decides between individual presets and bundle
9. Sees bundle offers better value
10. Adds "Dark & Moody Bundle" to cart
11. Checks out
12. Receives presets
13. Applies to 20+ photos for content calendar
14. Uses on Instagram posts → gets compliments
15. Returns to buy more presets next month

**Result:** Repeat customer, brand advocate

---

### Use Case 3: "Professional Vetting"
**Actor:** Professional Pete (professional photographer)

**Preconditions:**
- Evaluating preset options for workflow
- Technical compatibility important

**Flow:**
1. Visits website (referred by fellow photographer)
2. Immediately checks compatibility info
3. Confirms: Lightroom Classic ✓, CC ✓, Mobile ✓
4. Browses gallery: 1000+ before-after photos
5. Evaluates color accuracy across diverse skin tones
6. Checks preset details: adjustment intensity
7. Reviews installation instructions
8. Reads FAQ (compatibility, multi-computer use, etc)
9. Decides quality meets professional standards
10. Views bundle pricing (all presets)
11. Calculates: worth more than competitors
12. Purchases "Professional Bundle"
13. Integrates into Lightroom Classic workflow
14. Uses on client photos → consistent results
15. Recommends to colleagues

**Result:** High-value customer, word-of-mouth marketing

---

### Use Case 4: "Email Re-engagement"
**Actor:** Hobby Harry (2 weeks later)

**Preconditions:**
- Downloaded free presets 2 weeks ago
- Subscribed to email list
- Used presets, liked them

**Flow:**
1. Receives email: "Warm Golden preset now 20% off"
2. Subject line catches attention: "You loved the free presets... try this"
3. Clicks email link
4. Lands on "Warm Golden" preset page
5. Sees beautiful before-afters
6. Clicks "Add to Cart" with discount code auto-applied
7. Checkout shows: "$3.99 → $3.19" (20% savings)
8. Completes purchase
9. Downloads, uses, shares on Instagram
10. Follows brand on social media

**Result:** Repeat purchase, social engagement

---

## 4. EDGE CASES & ERROR SCENARIOS

### Edge Case 1: Duplicate Purchase
**Scenario:** User already owns preset A, tries to buy again

**Expected Behavior:**
- System detects duplicate
- Show: "You already own this preset"
- Option: "View your preset" (link to account downloads)
- Prevent accidental re-purchase

---

### Edge Case 2: Cart Abandonment
**Scenario:** User adds presets but doesn't checkout

**Expected Behavior:**
- Cart persists (localStorage or account)
- After 24h: abandoned cart email sent
- Email includes: items, subtotal, discount code (5% off)
- CTA: "Complete your purchase"

---

### Edge Case 3: Payment Failure
**Scenario:** Stripe payment declined

**Expected Behavior:**
- Show error message (clear reason)
- Suggest alternatives (different card, PayPal future)
- Cart preserved
- Support contact option
- Retry button available

---

### Edge Case 4: Download Link Expired
**Scenario:** User tries to re-download after 30 days (hypothetical)

**Expected Behavior:**
- Link might expire, but one-time purchase means infinite access
- User account page shows download button instead
- Alternative: resend download links via email

---

### Edge Case 5: Email Delivery Issues
**Scenario:** Confirmation email bounces or goes to spam

**Expected Behavior:**
- User can request "Resend confirmation email"
- Display message: "Didn't receive email? Check spam folder"
- Alternative: web dashboard to download without email confirmation

---

## 5. PRIORITY & PHASING

### Phase 1 (MVP - Week 5-8)
- US-1 to US-7: Free preset download + gallery
- US-12 to US-14: Checkout + payment
- US-15 to US-16: Account management

### Phase 2 (1-3 months post-launch)
- US-17 to US-18: Email automation
- US-4, US-5: Advanced filtering
- Reviews/ratings feature

### Phase 3 (3+ months)
- Affiliate program
- Video tutorials
- Blog/SEO content
- Advanced analytics

---

**Document Version:** 1.0
