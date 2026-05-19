# Technical Architecture & Database Schema
## Preset Lightroom E-Commerce Platform

**Version:** 1.0  
**Date:** May 18, 2026  
**Tech Stack:** Nuxt 3, Laravel 11, MySQL, Stripe, Cloudflare R2

---

## 1. SYSTEM ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────────────────┐
│                     CLIENT LAYER                        │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Nuxt 3 (Vue 3) - Frontend Application           │   │
│  │  - Home, Gallery, Catalog, Checkout              │   │
│  │  - Responsive, SSR-friendly                      │   │
│  └──────────────────────────────────────────────────┘   │
└──────────────────────┬──────────────────────────────────┘
                       │ API Calls (HTTP/REST)
                       ↓
┌─────────────────────────────────────────────────────────┐
│                     API LAYER (Middleware)              │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Next.js API Routes / Laravel Reverb (WebSocket) │   │
│  │  - Authentication (Sanctum)                      │   │
│  │  - Rate limiting, CORS handling                  │   │
│  └──────────────────────────────────────────────────┘   │
└──────────────────────┬──────────────────────────────────┘
                       │ API Calls (HTTP/REST)
                       ↓
┌─────────────────────────────────────────────────────────┐
│                  BACKEND LAYER                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Laravel 11 API (Controllers, Models, Services)  │   │
│  │  - Preset management                             │   │
│  │  - Order processing                              │   │
│  │  - Payment handling (Stripe integration)         │   │
│  │  - Email automation (SendGrid)                   │   │
│  │  - File delivery (Cloudflare R2)                 │   │
│  └──────────────────────────────────────────────────┘   │
└──────────────────────┬──────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
  ┌──────────┐  ┌──────────┐  ┌──────────────┐
  │  MySQL   │  │Cloudflare│  │  SendGrid    │
  │Database  │  │    R2    │  │  / Stripe    │
  └──────────┘  └──────────┘  └──────────────┘
```

---

## 2. TECHNOLOGY STACK DETAILS

### Frontend
```
Framework:    Nuxt 3 (Vue 3)
Build Tool:   Vite
Styling:      Tailwind CSS + Sass
State:        Pinia (global state)
HTTP Client:  axios + interceptors
Image:        vue-image-compare (before-after slider)
Forms:        VeeValidate + Zod
Analytics:    Google Analytics 4
```

### Backend
```
Framework:    Laravel 11
API Style:    RESTful JSON
Authentication: Laravel Sanctum (JWT)
Payment:      Stripe SDK
Email:        SendGrid (Mailable classes)
File Storage: Cloudflare R2 (S3-compatible)
Queue:        (optional, for async file processing)
Database:     MySQL 8.0+
Validation:   Laravel Validation + Custom Rules
```

### Infrastructure
```
Frontend Hosting:    Vercel or Netlify (Nuxt SSR)
Backend Hosting:     VPS (DigitalOcean / Linode)
Web Server:          Nginx
Process Manager:     Supervisor (Laravel artisan)
Database:            MySQL managed or self-hosted
File Storage:        Cloudflare R2
Email Service:       SendGrid
Payment Processor:   Stripe
DNS/CDN:             Cloudflare
```

---

## 3. DATABASE SCHEMA

### Users Table
```sql
CREATE TABLE users (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  email_verified_at TIMESTAMP NULL,
  avatar_url VARCHAR(255) NULL,
  
  -- Preferences
  newsletter_subscribed BOOLEAN DEFAULT TRUE,
  newsletter_frequency ENUM('daily', 'weekly', 'monthly') DEFAULT 'weekly',
  
  -- Metadata
  last_login_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL (soft delete)
);

CREATE INDEX idx_email ON users(email);
CREATE INDEX idx_created_at ON users(created_at);
```

### Presets Table
```sql
CREATE TABLE presets (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  
  -- Identification
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category ENUM('landscape', 'portrait', 'bw', 'moody', 'bright', 'vintage', 'cinematic', 'other') NOT NULL,
  
  -- Pricing & Status
  price_cents INT UNSIGNED DEFAULT 0, -- $0 = free, $3.99 = 399
  is_free BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  
  -- Files & Assets
  file_url VARCHAR(255) NOT NULL, -- Cloudflare R2 path
  file_size_kb INT,
  thumbnail_url VARCHAR(255) NOT NULL,
  
  -- Metadata
  compatibility VARCHAR(255), -- 'Lightroom Classic,Lightroom CC,Mobile'
  adjustment_intensity ENUM('light', 'medium', 'strong') DEFAULT 'medium',
  
  -- Sorting & Engagement
  sort_order INT DEFAULT 0,
  download_count INT UNSIGNED DEFAULT 0,
  rating DECIMAL(2,1) DEFAULT 0,
  review_count INT UNSIGNED DEFAULT 0,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE INDEX idx_category ON presets(category);
CREATE INDEX idx_price ON presets(price_cents);
CREATE INDEX idx_is_active ON presets(is_active);
CREATE INDEX idx_slug ON presets(slug);
```

### Preset Images Table
```sql
CREATE TABLE preset_images (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  
  -- Relationship
  preset_id BIGINT UNSIGNED NOT NULL,
  FOREIGN KEY (preset_id) REFERENCES presets(id) ON DELETE CASCADE,
  
  -- Image URLs
  before_image_url VARCHAR(255) NOT NULL,
  after_image_url VARCHAR(255) NOT NULL,
  before_image_size_kb INT,
  after_image_size_kb INT,
  
  -- Metadata
  sort_order INT DEFAULT 0,
  alt_text VARCHAR(255),
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_preset_id ON preset_images(preset_id);
CREATE INDEX idx_sort_order ON preset_images(sort_order);
```

### Bundles Table
```sql
CREATE TABLE bundles (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  
  -- Identification
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  
  -- Pricing
  price_cents INT UNSIGNED NOT NULL,
  
  -- Assets
  thumbnail_url VARCHAR(255),
  
  -- Status
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INT DEFAULT 0,
  
  -- Engagement
  download_count INT UNSIGNED DEFAULT 0,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_is_active ON bundles(is_active);
CREATE INDEX idx_price ON bundles(price_cents);
```

### Bundle Presets Table (Many-to-Many)
```sql
CREATE TABLE bundle_presets (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  
  -- Relationships
  bundle_id BIGINT UNSIGNED NOT NULL,
  preset_id BIGINT UNSIGNED NOT NULL,
  
  FOREIGN KEY (bundle_id) REFERENCES bundles(id) ON DELETE CASCADE,
  FOREIGN KEY (preset_id) REFERENCES presets(id) ON DELETE CASCADE,
  
  -- Metadata
  sort_order INT DEFAULT 0,
  
  -- Prevent duplicates
  UNIQUE KEY unique_bundle_preset (bundle_id, preset_id),
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_bundle_id ON bundle_presets(bundle_id);
CREATE INDEX idx_preset_id ON bundle_presets(preset_id);
```

### Orders Table
```sql
CREATE TABLE orders (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  
  -- Relationship
  user_id BIGINT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  
  -- Order Details
  order_number VARCHAR(255) UNIQUE NOT NULL,
  status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
  
  -- Pricing
  subtotal_cents INT UNSIGNED NOT NULL,
  tax_cents INT UNSIGNED DEFAULT 0,
  total_cents INT UNSIGNED NOT NULL,
  
  -- Payment
  stripe_payment_intent_id VARCHAR(255) UNIQUE,
  payment_method VARCHAR(50), -- 'card', 'transfer', etc
  
  -- Customer Info
  customer_email VARCHAR(255) NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  customer_country VARCHAR(2),
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  completed_at TIMESTAMP NULL,
  refunded_at TIMESTAMP NULL
);

CREATE INDEX idx_user_id ON orders(user_id);
CREATE INDEX idx_status ON orders(status);
CREATE INDEX idx_created_at ON orders(created_at);
CREATE INDEX idx_stripe_payment ON orders(stripe_payment_intent_id);
```

### Order Items Table
```sql
CREATE TABLE order_items (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  
  -- Relationship
  order_id BIGINT UNSIGNED NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  
  -- Preset or Bundle (one will be set)
  preset_id BIGINT UNSIGNED NULL,
  bundle_id BIGINT UNSIGNED NULL,
  
  FOREIGN KEY (preset_id) REFERENCES presets(id) ON DELETE SET NULL,
  FOREIGN KEY (bundle_id) REFERENCES bundles(id) ON DELETE SET NULL,
  
  -- Pricing at time of purchase
  price_cents INT UNSIGNED NOT NULL,
  
  -- Quantity (normally 1)
  quantity INT UNSIGNED DEFAULT 1,
  
  -- Metadata
  preset_name VARCHAR(255),
  bundle_name VARCHAR(255),
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_order_id ON order_items(order_id);
CREATE INDEX idx_preset_id ON order_items(preset_id);
CREATE INDEX idx_bundle_id ON order_items(bundle_id);
```

### User Downloads Table (Purchase History)
```sql
CREATE TABLE user_downloads (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  
  -- Relationships
  user_id BIGINT UNSIGNED NOT NULL,
  order_id BIGINT UNSIGNED NOT NULL,
  preset_id BIGINT UNSIGNED NOT NULL,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (preset_id) REFERENCES presets(id) ON DELETE CASCADE,
  
  -- Access tracking
  download_count INT UNSIGNED DEFAULT 0,
  last_downloaded_at TIMESTAMP NULL,
  
  -- Prevent duplicates (user buys same preset twice in different bundles)
  UNIQUE KEY unique_user_preset (user_id, preset_id),
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_id ON user_downloads(user_id);
CREATE INDEX idx_preset_id ON user_downloads(preset_id);
```

### Email Subscriptions Table
```sql
CREATE TABLE email_subscriptions (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  
  -- Email (not necessarily user)
  email VARCHAR(255) NOT NULL,
  
  -- Status
  subscribed BOOLEAN DEFAULT TRUE,
  subscription_source ENUM('free_preset', 'cart_abandonment', 'homepage', 'manual') DEFAULT 'free_preset',
  
  -- Preferences
  newsletter_frequency ENUM('daily', 'weekly', 'monthly', 'promotional_only') DEFAULT 'weekly',
  
  -- Validation
  confirmation_token VARCHAR(255) UNIQUE NULL,
  confirmed_at TIMESTAMP NULL,
  
  -- Engagement
  last_email_sent_at TIMESTAMP NULL,
  unsubscribed_at TIMESTAMP NULL,
  
  -- Metadata
  utm_source VARCHAR(255) NULL,
  utm_campaign VARCHAR(255) NULL,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  UNIQUE KEY unique_email (email)
);

CREATE INDEX idx_subscribed ON email_subscriptions(subscribed);
CREATE INDEX idx_created_at ON email_subscriptions(created_at);
```

### Analytics Events Table (Optional, for tracking)
```sql
CREATE TABLE analytics_events (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  
  -- Event Details
  event_name VARCHAR(255) NOT NULL,
  event_data JSON,
  
  -- User Tracking
  user_id BIGINT UNSIGNED NULL,
  session_id VARCHAR(255),
  
  -- Context
  page_url VARCHAR(500),
  referrer VARCHAR(500),
  user_agent TEXT,
  ip_address VARCHAR(45),
  
  -- Timestamp
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX idx_event_name ON analytics_events(event_name);
CREATE INDEX idx_user_id ON analytics_events(user_id);
CREATE INDEX idx_created_at ON analytics_events(created_at);
```

---

## 4. API ENDPOINTS SPECIFICATION

### Authentication
```
POST   /api/auth/register              - Register new user
POST   /api/auth/login                 - Login (returns token)
POST   /api/auth/logout                - Logout
POST   /api/auth/refresh               - Refresh token
POST   /api/auth/forgot-password       - Request password reset
POST   /api/auth/reset-password        - Reset password with token
GET    /api/auth/me                    - Get current user info
```

### Presets
```
GET    /api/presets                    - List all presets (with filters)
  ?category=landscape&sort=newest
  
GET    /api/presets/:id                - Get single preset details
GET    /api/presets/:slug              - Get by slug (SEO friendly)

ADMIN:
POST   /api/presets                    - Create preset
PUT    /api/presets/:id                - Update preset
DELETE /api/presets/:id                - Delete preset
POST   /api/presets/:id/images         - Upload preset images
```

### Preset Images (Gallery)
```
GET    /api/images                     - List gallery images (paginated)
  ?preset_id=1&category=landscape&sort=newest&page=1&per_page=20
  
GET    /api/images/:id                 - Get single image details
```

### Bundles
```
GET    /api/bundles                    - List all bundles
GET    /api/bundles/:id                - Get bundle details
GET    /api/bundles/:slug              - Get by slug

ADMIN:
POST   /api/bundles                    - Create bundle
PUT    /api/bundles/:id                - Update bundle
DELETE /api/bundles/:id                - Delete bundle
POST   /api/bundles/:id/presets        - Add presets to bundle
```

### Shopping Cart
```
GET    /api/cart                       - Get current cart
POST   /api/cart/items                 - Add item to cart
DELETE /api/cart/items/:item_id        - Remove item from cart
PUT    /api/cart/items/:item_id        - Update item quantity
DELETE /api/cart                       - Clear entire cart
```

### Orders
```
POST   /api/orders                     - Create order
GET    /api/orders/:id                 - Get order details
GET    /api/orders                     - List user's orders (paginated)

POST   /api/orders/:id/pay             - Process payment (Stripe)
POST   /webhooks/stripe                - Stripe webhook (payment confirmation)
```

### Downloads
```
GET    /api/downloads                  - List user's purchased presets
GET    /api/downloads/:preset_id/url   - Get download URL (pre-signed)
```

### Email Subscriptions
```
POST   /api/subscribe                  - Subscribe to email list
POST   /api/unsubscribe                - Unsubscribe from email list
POST   /api/confirm-email              - Confirm email via token
```

### Analytics (Client-side)
```
POST   /api/analytics/track            - Track event (page view, etc)
```

---

## 5. FILE STORAGE STRATEGY

### Cloudflare R2 Structure
```
preset-lightroom-app/
├── presets/
│   ├── lightroom_classic/
│   │   └── andrian_warmgolden_v1.0.lrtemplate
│   ├── lightroom_cc/
│   │   └── andrian_warmgolden_v1.0.xmp
│   └── lightroom_mobile/
│       └── andrian_warmgolden_v1.0.dng
│
├── images/
│   ├── gallery/
│   │   ├── warmgolden_before_001.jpg
│   │   ├── warmgolden_after_001.jpg
│   │   └── ... (1000+ images)
│   ├── thumbnails/
│   │   └── ... (optimized 400px versions)
│   └── presets_covers/
│       └── ... (preset showcase images)
│
└── temp/
    └── ... (temporary files for processing)
```

### File Delivery Strategy
1. Purchase → Order created in DB
2. User click "Download"
3. Backend generates pre-signed URL (expires in 24h)
4. Frontend initiates download from R2
5. No direct access tokens exposed

### Image Optimization Pipeline
```
Raw image uploaded
    ↓
Validate (format, size)
    ↓
Generate variants:
  - Full (1200px): main gallery
  - Thumb (400px): grid view
  - Blur (100px): placeholder
    ↓
Compress (80% JPG quality)
    ↓
Upload to R2
    ↓
Save URLs to database
```

---

## 6. SECURITY ARCHITECTURE

### Authentication Flow
```
1. User registers/logs in
2. Server validates credentials
3. Server creates JWT token (signed)
4. Token stored in httpOnly cookie
5. Frontend includes cookie in requests
6. Server validates token on protected routes
```

### API Security
- CORS: whitelist allowed domains
- Rate limiting: 100 requests/minute per IP
- CSRF tokens: on forms
- SQL Injection: prepared statements (Laravel)
- XSS prevention: Vue auto-escapes
- File validation: mimetype + size checks
- Password security: bcrypt hashing

### Payment Security
- PCI compliance: Stripe handles card data
- Server never sees card numbers
- Orders encrypted at rest
- HTTPS only

### Email Security
- Confirmation tokens (single use)
- Signature verification for password reset
- SMTP TLS encryption

---

## 7. PERFORMANCE OPTIMIZATION

### Database Optimization
- Indexes on frequently queried columns
- Connection pooling (Laravel queue)
- Query optimization (n+1 prevention with eager loading)
- Database replication for redundancy

### Image Optimization
- Lazy loading (Intersection Observer)
- WebP with JPEG fallback
- Responsive images (srcset)
- CDN caching (Cloudflare)
- Compression (TinyPNG quality)

### Frontend Optimization
- Code splitting (Nuxt auto)
- Server-side rendering (Nuxt)
- Static generation (presets/bundles)
- Browser caching headers
- Minification + tree shaking

### Backend Optimization
- Query result caching (Redis, future)
- HTTP response compression (gzip)
- Async processing (Queue, future)
- Database query optimization

---

## 8. ERROR HANDLING & LOGGING

### Frontend Error Handling
- Global error boundary (Nuxt)
- User-friendly error messages
- Sentry integration (error tracking)
- Validation feedback (VeeValidate)

### Backend Error Handling
- Try-catch blocks
- Laravel exception handler
- Custom error responses (JSON)
- Request/response logging
- Sentry integration

### Logging Strategy
```
ERROR:   Login failed, payment issues
WARNING: Slow queries, email delivery
INFO:    Order created, user registered
DEBUG:   API calls, database queries (dev only)
```

---

## 9. BACKUP & DISASTER RECOVERY

### Database Backups
- Daily automated backups
- 30-day retention
- Geo-redundant storage (if using managed DB)
- Test restore monthly

### File Backups
- Cloudflare R2 versioning enabled
- Daily snapshots (if available)
- Duplicate critical files to secondary storage

### Recovery Procedures
- Database restoration documented
- File recovery tested
- RTO (Recovery Time Objective): 2 hours
- RPO (Recovery Point Objective): 24 hours

---

## 10. DEPLOYMENT ARCHITECTURE

### Development Environment
```
Local machine:
- Nuxt dev server (hot reload)
- Laravel local server
- MySQL local
- .env.local configuration
```

### Staging Environment
```
VPS (same as production):
- Full replica of production
- Separate database
- Testing payment (Stripe test keys)
- Email preview (no actual send)
```

### Production Environment
```
Frontend:
- Vercel/Netlify (Nuxt SSR)
- Global CDN
- Automatic deployments on push

Backend:
- VPS (DigitalOcean/Linode)
- Nginx reverse proxy
- Process manager (Supervisor)
- SSL/TLS (Let's Encrypt)
- Auto renewal

Database:
- MySQL managed (or self-hosted with backups)
- Daily backups
- Connection pooling

Services:
- Cloudflare (DNS, CDN, DDoS protection)
- SendGrid (email)
- Stripe (payments)
```

---

## 11. MONITORING & OBSERVABILITY

### Metrics to Monitor
- **Performance:** Page load time, API response time, error rate
- **Business:** Conversions, AOV, refunds, email delivery
- **Infrastructure:** CPU, memory, disk, network

### Tools
- Google Analytics 4 (user behavior)
- Sentry (error tracking)
- Uptime monitoring (Pingdom/Better Uptime)
- Server monitoring (New Relic / DataDog, if budget allows)

---

**Document Version:** 1.0  
**Next Update:** After initial deployment
