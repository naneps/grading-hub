# Business Requirements Document (BRD)
## Preset Lightroom E-Commerce Platform

**Project Name:** Preset Lightroom E-Commerce Website  
**Owner:** [Your Name]  
**Date Created:** May 18, 2026  
**Last Updated:** May 18, 2026  
**Status:** Discovery Phase

---

## 1. EXECUTIVE SUMMARY

Membangun platform e-commerce untuk menjual Lightroom presets dengan model freemium + one-time purchase. Platform akan showcase 1000+ foto before-after sebagai gallery untuk demonstrate preset quality. Fokus pada user experience yang smooth, trust building melalui free tier, dan passive income generation.

---

## 2. BUSINESS OBJECTIVES

### Primary Goals
1. **Launch preset product line** dalam 1-2 bulan
2. **Build trust** melalui freemium model (3 free presets)
3. **Generate revenue** dari paid presets (individual + bundle)
4. **Create scalable business** (passive income, minimal maintenance)
5. **Build email list** untuk future marketing

### Success Metrics
- **Month 1-3:** 100+ downloads (free tier)
- **Month 1-3:** 5-10 paid conversions
- **Conversion rate target:** 2-5% (free → paid)
- **Email list:** 500+ subscribers dalam 3 bulan
- **Website traffic:** 1000+ unique visitors/month (target)

---

## 3. MARKET ANALYSIS

### Target Audience
1. **Primary:** Photography enthusiasts (hobbyist to semi-professional)
   - Age: 20-45
   - Platform: Instagram, YouTube, TikTok
   - Pain point: "Color grading is too complicated"

2. **Secondary:** Professional photographers
   - Workflow efficiency seekers
   - Willing to pay for quality

3. **Tertiary:** Content creators
   - Instagram/TikTok photographers
   - Need consistent aesthetic
   - Price sensitive but value quality

### Competitive Landscape
| Competitor | Model | Price Point | Strength |
|---|---|---|---|
| VSCO | Subscription | $10.99/mo | Large community |
| FilterGrade | Marketplace | $5-50 | Variety, no subscription |
| Peter McKinnon | One-time | $50-100 | Brand + quality |
| Gumroad | Mixed | Varies | Easy distribution |

**Our Advantage:**
- Personal brand (direct relationship)
- Quality samples (1000 photos)
- Freemium trust builder
- No subscription commitment

---

## 4. PRODUCT OVERVIEW

### Product: Lightroom Presets + Gallery

**What is a preset?**
- File that saves Lightroom editing settings
- One-click color grading solution
- Works in Lightroom Classic, CC, Mobile

**What we sell:**
- Individual presets ($3.99 each)
- Preset bundles ($14.99 - $39.99)
- Free tier (3 presets, email capture)

### Key Features
1. **Gallery showcase** (1000+ photos)
   - Before-after slider
   - Filter by preset/category
   - Lazy loading for performance

2. **Freemium download** (email capture)
   - 3 free presets
   - Lead generation for email marketing

3. **Preset catalog** (individual + bundle)
   - Detailed product pages
   - Installation guide
   - Compatibility info

4. **E-commerce** (cart + checkout)
   - Stripe payment integration
   - Automatic file delivery
   - Order history for users

---

## 5. REVENUE MODEL

### Pricing Strategy

| Product | Price | Volume Assumption | Monthly Revenue |
|---|---|---|---|
| Individual Preset | $3.99 | 20 units | $80 |
| Small Bundle (5) | $14.99 | 30 units | $450 |
| Large Bundle (all) | $39.99 | 10 units | $400 |
| **Monthly Total** | - | 60 units | **$930** |
| **Yearly Total** | - | 720 units | **$11,160** |

**Note:** Conservative estimate. Growth potential with marketing/social.

### Cost Structure
- **Hosting:** $50/month (VPS)
- **Storage:** $10/month (Cloudflare R2)
- **Email service:** $20/month (SendGrid)
- **Domain:** $12/year
- **Payment processor fee:** 2.9% + $0.30 per transaction
- **Total fixed:** ~$80/month
- **Gross margin:** ~75-85% (digital product)

### Break-even
- At $930/month revenue, profitable from month 1
- Conservative estimate, actual likely higher with organic growth

---

## 6. BUSINESS MODEL

### Freemium Strategy

**Free Tier (Acquisition)**
- 3 free presets (basic/versatile)
- Requires email signup
- Lead magnet for email marketing
- Limited installation guide

**Paid Tier (Monetization)**
- Premium individual presets ($3.99)
- Curated bundles ($14.99, $39.99)
- One-time purchase (no subscription)
- Includes detailed guide + customer support

**Why freemium?**
1. Low barrier to entry
2. Build trust with quality product
3. Email list building
4. Conversion path: free user → paid customer
5. Viral potential (users recommend)

### Customer Acquisition Channels
1. **Organic social** (Instagram, TikTok)
   - Before-after showcase
   - Testimonials
   - User-generated content

2. **Email marketing** (to free tier users)
   - Welcome sequence
   - New preset announcements
   - Limited-time offers

3. **Content marketing** (optional, phase 2)
   - Blog: "Best presets for landscape"
   - YouTube tutorials
   - Collaboration with photographers

4. **Affiliate program** (future)
   - Encourage creator/influencer promotion

---

## 7. MONETIZATION TIMELINE

| Phase | Timeline | Revenue | Action |
|---|---|---|---|
| **Phase 1: Launch** | Month 1-2 | $0 | Build + marketing prep |
| **Phase 2: Soft launch** | Month 2 | $200-500 | Friends + email list |
| **Phase 3: Public launch** | Month 3 | $500-1500 | Social marketing push |
| **Phase 4: Growth** | Month 4-6 | $1500+ | Organic + referral |
| **Phase 5: Optimize** | Month 6+ | $2000+ | Email marketing + upsell |

---

## 8. SCOPE DEFINITION

### In Scope (MVP)
- Website with gallery (1000 photos)
- Free preset tier (3 presets)
- Paid preset tier (individual + 2 bundles)
- Stripe payment integration
- Email capture for free tier
- Account system (purchase history)
- Installation guide + FAQ
- Mobile responsive design

### Out of Scope (Phase 2+)
- Video tutorials (recorded later)
- Blog/SEO content
- Affiliate program
- Subscription model
- Mobile app
- Community features
- API for third-party integrations
- Advanced analytics dashboard

---

## 9. ASSUMPTIONS & CONSTRAINTS

### Assumptions
1. Presets already created and working in Lightroom
2. 1000 photos available for showcase
3. Owner can manage basic marketing
4. Launch in ~6-8 weeks is realistic
5. Passive income model acceptable (low maintenance)

### Constraints
- **Technical:** Must use Nuxt + Laravel (existing stack)
- **Time:** Launch santai, quality over speed
- **Budget:** Minimal ($0-200/month hosting)
- **Maintenance:** Low overhead (preset files don't need updating)

---

## 10. SUCCESS CRITERIA

### Quantitative
- ✅ Website live with all pages functional
- ✅ 100+ free preset downloads (month 1-3)
- ✅ 5-10 paid transactions (month 1-3)
- ✅ 2-5% conversion rate (free → paid)
- ✅ 500+ email list subscribers
- ✅ Page load time <2 seconds
- ✅ Mobile conversion rate >1.5%

### Qualitative
- ✅ Professional, cohesive brand image
- ✅ Easy preset installation experience
- ✅ High-quality before-after gallery
- ✅ Positive customer feedback
- ✅ Smooth payment experience (zero friction)

---

## 11. RISKS & MITIGATION

| Risk | Impact | Mitigation |
|---|---|---|
| Low conversion rate | Revenue impact | A/B test pricing, CTA copy |
| Payment processing issues | Customer frustration | Test thoroughly, good error handling |
| Gallery performance (1000 images) | UX degradation | Lazy loading, image optimization, CDN |
| Market saturation | Competition | Focus on unique brand positioning |
| Email deliverability | List building fails | Use reputable ESP (SendGrid), proper auth |

---

## 12. NEXT STEPS

### Immediate (This week)
- [ ] Finalize preset list (count, naming, categorization)
- [ ] Export presets from Lightroom
- [ ] Organize 1000 photos (metadata, optimization)
- [ ] Create preset inventory spreadsheet
- [ ] Design brand identity (name, logo, colors)

### Short-term (Week 2-4)
- [ ] Create before-after assets (3 per preset)
- [ ] Set up development environment (Nuxt + Laravel)
- [ ] Build database schema
- [ ] Create detailed product specification
- [ ] Develop UI mockups

### Medium-term (Week 5-8)
- [ ] Build Nuxt frontend (pages, components)
- [ ] Build Laravel API (endpoints, payment integration)
- [ ] Integrate Stripe payment
- [ ] Set up email automation (SendGrid)
- [ ] Deploy to staging

### Launch (Week 8+)
- [ ] Final testing (payment, email, downloads)
- [ ] Soft launch (friends, email testers)
- [ ] Public launch + social marketing
- [ ] Monitor metrics + optimize

---

## 13. STAKEHOLDERS

| Role | Name | Responsibility |
|---|---|---|
| Product Owner | [Your Name] | Vision, decision-making, marketing |
| Developer | [Your Name] | Tech implementation |
| Designer | [TBD] | Brand, UI/UX |

---

## APPENDIX: KEY DEFINITIONS

**Preset:** File containing Lightroom editing settings  
**Bundle:** Collection of presets sold together  
**Freemium:** Free + premium tier model  
**Conversion rate:** % of free users → paid customers  
**Email capture:** Collecting email for marketing  
**One-time purchase:** Non-subscription, permanent ownership  

---

**Document Version:** 1.0  
**Next Review Date:** After 30 days of launch
