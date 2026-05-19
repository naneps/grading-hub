# API Specification
## Preset Lightroom E-Commerce Platform

**Version:** 1.0  
**Base URL:** `https://api.presets.local/api` (dev), `https://api.presets.app/api` (prod)  
**Authentication:** JWT Bearer token (localStorage → header)

---

## 1. AUTHENTICATION ENDPOINTS

### POST /auth/register
**Register new user**

```json
Request Body:
{
  "email": "user@example.com",
  "name": "John Doe",
  "password": "securePassword123"
}

Response (201):
{
  "success": true,
  "message": "Account created successfully",
  "data": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "expires_in": 86400
  }
}

Response (422):
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": ["Email already exists"],
    "password": ["Password must be 8+ characters"]
  }
}
```

**Validation Rules:**
- `email`: Required, email format, unique
- `name`: Required, min 2 chars, max 255
- `password`: Required, min 8 chars, contains uppercase + number

---

### POST /auth/login
**Login user, return JWT token**

```json
Request Body:
{
  "email": "user@example.com",
  "password": "securePassword123"
}

Response (200):
{
  "success": true,
  "data": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "expires_in": 86400
  }
}

Response (401):
{
  "success": false,
  "message": "Invalid credentials"
}
```

---

### POST /auth/logout
**Logout user (invalidate token)**

```
Headers:
  Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

### GET /auth/me
**Get current authenticated user**

```
Headers:
  Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "data": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "avatar_url": null,
    "newsletter_subscribed": true,
    "created_at": "2026-05-20T10:00:00Z"
  }
}

Response (401):
{
  "success": false,
  "message": "Unauthorized"
}
```

---

### POST /auth/refresh
**Refresh JWT token**

```json
Request Body:
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}

Response (200):
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "expires_in": 86400
  }
}
```

---

### POST /auth/forgot-password
**Request password reset**

```json
Request Body:
{
  "email": "user@example.com"
}

Response (200):
{
  "success": true,
  "message": "Password reset link sent to email"
}
```

---

### POST /auth/reset-password
**Reset password with token**

```json
Request Body:
{
  "email": "user@example.com",
  "token": "reset_token_from_email",
  "password": "newPassword123"
}

Response (200):
{
  "success": true,
  "message": "Password reset successfully"
}

Response (422):
{
  "success": false,
  "message": "Reset token expired or invalid"
}
```

---

## 2. PRESET ENDPOINTS

### GET /presets
**List all presets with filters and sorting**

```
Query Parameters:
  ?category=landscape          (filter by category)
  &price_min=0                (filter by min price in cents)
  &price_max=5000             (filter by max price in cents)
  &sort=newest                (newest, popular, price_asc, price_desc)
  &per_page=12                (items per page)
  &page=1                     (page number)

Response (200):
{
  "success": true,
  "data": [
    {
      "id": 1,
      "slug": "warm-golden",
      "name": "Warm Golden",
      "category": "landscape",
      "description": "Warm golden hour tones...",
      "price_cents": 399,
      "is_free": false,
      "thumbnail_url": "https://r2.example.com/presets/warm-golden.jpg",
      "compatibility": "Lightroom Classic, Lightroom CC, Mobile",
      "adjustment_intensity": "medium",
      "download_count": 150,
      "rating": 4.5,
      "review_count": 23
    }
  ],
  "pagination": {
    "total": 45,
    "per_page": 12,
    "current_page": 1,
    "last_page": 4,
    "from": 1,
    "to": 12
  }
}
```

---

### GET /presets/:id
**Get single preset details**

```
URL Parameter:
  :id = preset database ID (integer)

Response (200):
{
  "success": true,
  "data": {
    "id": 1,
    "slug": "warm-golden",
    "name": "Warm Golden",
    "category": "landscape",
    "description": "Warm golden hour tones perfect for sunset and landscape photography...",
    "price_cents": 399,
    "is_free": false,
    "thumbnail_url": "...",
    "compatibility": "Lightroom Classic, Lightroom CC, Mobile",
    "adjustment_intensity": "medium",
    "sort_order": 1,
    "download_count": 150,
    "rating": 4.5,
    "review_count": 23,
    "images": [
      {
        "id": 1,
        "before_image_url": "...",
        "after_image_url": "...",
        "alt_text": "Sunset landscape before and after",
        "sort_order": 0
      }
    ],
    "created_at": "2026-05-01T00:00:00Z",
    "updated_at": "2026-05-01T00:00:00Z"
  }
}
```

---

### GET /presets/:slug
**Get preset by slug (SEO-friendly)**

```
URL Parameter:
  :slug = preset slug (string, e.g., "warm-golden")

Response: Same as GET /presets/:id
```

---

### POST /presets (Admin)
**Create new preset**

```
Headers:
  Authorization: Bearer {admin_token}
  Content-Type: application/json

Request Body:
{
  "slug": "warm-golden",
  "name": "Warm Golden",
  "category": "landscape",
  "description": "...",
  "price_cents": 399,
  "is_free": false,
  "compatibility": "Lightroom Classic,Lightroom CC,Mobile",
  "adjustment_intensity": "medium"
}

Response (201):
{
  "success": true,
  "data": {
    "id": 1,
    "slug": "warm-golden",
    ...
  }
}
```

---

### PUT /presets/:id (Admin)
**Update preset**

```
Headers:
  Authorization: Bearer {admin_token}

Request Body: (same as POST)

Response (200): Updated preset
```

---

### DELETE /presets/:id (Admin)
**Delete preset (soft delete)**

```
Headers:
  Authorization: Bearer {admin_token}

Response (200):
{
  "success": true,
  "message": "Preset deleted successfully"
}
```

---

## 3. PRESET IMAGES (GALLERY)

### GET /images
**List gallery images with lazy loading**

```
Query Parameters:
  ?preset_id=1                (filter by preset)
  &category=landscape         (filter by category)
  &sort=newest                (newest, popular)
  &page=1                     (page number)
  &per_page=20                (items per page)

Response (200):
{
  "success": true,
  "data": [
    {
      "id": 1,
      "preset_id": 1,
      "preset_name": "Warm Golden",
      "before_image_url": "https://r2.example.com/images/...",
      "after_image_url": "https://r2.example.com/images/...",
      "category": "landscape",
      "alt_text": "Sunset landscape",
      "sort_order": 0
    }
  ],
  "pagination": {
    "total": 450,
    "per_page": 20,
    "current_page": 1,
    "last_page": 23
  }
}
```

---

### GET /images/:id
**Get single image details**

```
Response (200):
{
  "success": true,
  "data": {
    "id": 1,
    "preset_id": 1,
    "preset_name": "Warm Golden",
    "before_image_url": "...",
    "after_image_url": "...",
    "alt_text": "Sunset landscape before and after",
    "category": "landscape"
  }
}
```

---

## 4. BUNDLE ENDPOINTS

### GET /bundles
**List all bundles**

```
Query Parameters:
  ?sort=newest                (newest, popular, price)
  &per_page=12
  &page=1

Response (200):
{
  "success": true,
  "data": [
    {
      "id": 1,
      "slug": "landscape-bundle",
      "name": "Landscape Bundle",
      "description": "5 presets perfect for landscape photography",
      "price_cents": 1499,
      "thumbnail_url": "...",
      "preset_count": 5,
      "original_value_cents": 1995,
      "discount_percent": 25,
      "download_count": 50
    }
  ]
}
```

---

### GET /bundles/:id
**Get bundle details with included presets**

```
Response (200):
{
  "success": true,
  "data": {
    "id": 1,
    "slug": "landscape-bundle",
    "name": "Landscape Bundle",
    "description": "...",
    "price_cents": 1499,
    "original_value_cents": 1995,
    "discount_percent": 25,
    "thumbnail_url": "...",
    "presets": [
      {
        "id": 1,
        "name": "Warm Golden",
        "price_cents": 399
      },
      ...
    ]
  }
}
```

---

## 5. SHOPPING CART

### POST /cart/items
**Add item to cart**

```json
Request Body:
{
  "preset_id": 1,    (optional, if preset)
  "bundle_id": null, (optional, if bundle)
  "quantity": 1
}

Response (201):
{
  "success": true,
  "message": "Added to cart",
  "data": {
    "id": 1,
    "preset_id": 1,
    "preset_name": "Warm Golden",
    "price_cents": 399
  }
}

Response (422):
{
  "success": false,
  "message": "You already own this preset"
}
```

---

### GET /cart
**Get current cart items**

```
Headers:
  Authorization: Bearer {token} (optional, for logged-in users)

Response (200):
{
  "success": true,
  "data": {
    "items": [
      {
        "id": 1,
        "preset_id": 1,
        "preset_name": "Warm Golden",
        "price_cents": 399,
        "quantity": 1
      },
      {
        "id": 2,
        "bundle_id": 1,
        "bundle_name": "Landscape Bundle",
        "price_cents": 1499,
        "quantity": 1
      }
    ],
    "subtotal_cents": 1898,
    "tax_cents": 0,
    "total_cents": 1898,
    "item_count": 2
  }
}
```

---

### DELETE /cart/items/:item_id
**Remove item from cart**

```
Response (200):
{
  "success": true,
  "message": "Item removed",
  "data": {
    "subtotal_cents": 399,
    "total_cents": 399
  }
}
```

---

### DELETE /cart
**Clear entire cart**

```
Response (200):
{
  "success": true,
  "message": "Cart cleared"
}
```

---

## 6. ORDERS

### POST /orders
**Create order from cart**

```json
Request Body:
{
  "customer_email": "user@example.com",
  "customer_name": "John Doe",
  "customer_country": "US",
  "coupon_code": "WELCOME15" (optional)
}

Response (201):
{
  "success": true,
  "data": {
    "id": 1,
    "order_number": "ORD-20260520-001",
    "status": "pending",
    "subtotal_cents": 1898,
    "tax_cents": 0,
    "total_cents": 1898,
    "customer_email": "user@example.com",
    "items": [
      {
        "preset_name": "Warm Golden",
        "price_cents": 399
      }
    ],
    "payment_intent_id": "pi_...",
    "client_secret": "pi_...secret"
  }
}
```

---

### POST /orders/:id/pay
**Process payment with Stripe**

```json
Request Body:
{
  "payment_method_id": "pm_...",
  "stripe_payment_intent_id": "pi_..."
}

Response (200):
{
  "success": true,
  "message": "Payment successful",
  "data": {
    "order_id": 1,
    "status": "completed",
    "download_links": [
      {
        "preset_name": "Warm Golden",
        "url": "https://r2.example.com/download?token=..."
      }
    ]
  }
}

Response (402):
{
  "success": false,
  "message": "Payment declined",
  "code": "card_declined"
}
```

---

### GET /orders
**List user's orders (authenticated)**

```
Headers:
  Authorization: Bearer {token}

Query Parameters:
  ?page=1
  &per_page=10

Response (200):
{
  "success": true,
  "data": [
    {
      "id": 1,
      "order_number": "ORD-20260520-001",
      "status": "completed",
      "total_cents": 1898,
      "items_count": 2,
      "created_at": "2026-05-20T10:00:00Z"
    }
  ],
  "pagination": {...}
}
```

---

### GET /orders/:id
**Get order details**

```
Headers:
  Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "data": {
    "id": 1,
    "order_number": "ORD-20260520-001",
    "status": "completed",
    "subtotal_cents": 1898,
    "total_cents": 1898,
    "items": [
      {
        "preset_name": "Warm Golden",
        "price_cents": 399,
        "download_link": "https://r2.example.com/..."
      }
    ],
    "created_at": "2026-05-20T10:00:00Z"
  }
}
```

---

## 7. DOWNLOADS & FILE ACCESS

### GET /downloads
**List user's purchased presets**

```
Headers:
  Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "data": [
    {
      "id": 1,
      "preset_id": 1,
      "preset_name": "Warm Golden",
      "downloaded_at": "2026-05-20T10:00:00Z",
      "download_count": 3
    }
  ]
}
```

---

### GET /downloads/:preset_id/url
**Get pre-signed download URL**

```
Headers:
  Authorization: Bearer {token}

URL Parameter:
  :preset_id = preset ID

Response (200):
{
  "success": true,
  "data": {
    "preset_name": "Warm Golden",
    "download_url": "https://r2.example.com/presets/...?X-Amz-Signature=...",
    "expires_in": 86400 (seconds)
  }
}

Response (403):
{
  "success": false,
  "message": "You do not own this preset"
}
```

---

## 8. EMAIL SUBSCRIPTIONS

### POST /subscribe
**Subscribe email to list (free preset download)**

```json
Request Body:
{
  "email": "user@example.com",
  "name": "John" (optional),
  "photography_type": "landscape" (optional)
}

Response (201):
{
  "success": true,
  "message": "Subscription successful. Check your email.",
  "data": {
    "email": "user@example.com",
    "confirmation_token": "token_...",
    "expires_at": "2026-05-27T10:00:00Z"
  }
}

Response (422):
{
  "success": false,
  "message": "Email already subscribed"
}
```

---

### POST /confirm-email
**Confirm email subscription (click link in email)**

```json
Request Body:
{
  "token": "confirmation_token_from_email"
}

Response (200):
{
  "success": true,
  "message": "Email confirmed successfully",
  "data": {
    "download_links": [
      {
        "preset_name": "Free Preset 1",
        "url": "https://r2.example.com/..."
      }
    ]
  }
}

Response (422):
{
  "success": false,
  "message": "Token invalid or expired"
}
```

---

### POST /unsubscribe
**Unsubscribe from email list**

```json
Request Body:
{
  "email": "user@example.com"
}

Response (200):
{
  "success": true,
  "message": "Unsubscribed successfully"
}
```

---

## 9. WEBHOOKS

### POST /webhooks/stripe
**Stripe webhook (payment confirmation)**

```
Headers:
  Stripe-Signature: {signature}

Body: (Stripe event JSON)
{
  "type": "payment_intent.succeeded",
  "data": {
    "object": {
      "id": "pi_...",
      "status": "succeeded",
      "metadata": {
        "order_id": "1"
      }
    }
  }
}

Response (200):
{
  "success": true,
  "received": true
}
```

**Webhook Handler Actions:**
1. Verify Stripe signature
2. Look up order by payment_intent_id
3. Update order status → "completed"
4. Create user_downloads records
5. Send order confirmation email
6. Return 200 success

---

## 10. ERROR HANDLING

### Standard Error Response

```json
{
  "success": false,
  "message": "User-friendly error message",
  "code": "error_code",
  "errors": {
    "field_name": ["Specific validation message"]
  }
}
```

### HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Not allowed (e.g., not owner) |
| 404 | Not Found - Resource doesn't exist |
| 422 | Unprocessable Entity - Validation failed |
| 429 | Too Many Requests - Rate limited |
| 500 | Internal Server Error - Server error |

---

## 11. RATE LIMITING

```
Rate Limits per IP:
  - Auth endpoints: 5 requests / minute
  - API endpoints: 100 requests / minute
  - Payment endpoints: 10 requests / minute
  - General: 1000 requests / hour

Headers returned:
  X-RateLimit-Limit: 100
  X-RateLimit-Remaining: 95
  X-RateLimit-Reset: 1653036900 (Unix timestamp)
```

---

## 12. PAGINATION

**Query Parameters:**
```
  ?page=1       (page number, default: 1)
  &per_page=12  (items per page, default: 12, max: 100)
```

**Response Pagination Object:**
```json
{
  "pagination": {
    "total": 450,           (total items)
    "per_page": 12,         (items per page)
    "current_page": 1,      (current page)
    "last_page": 38,        (last page number)
    "from": 1,              (first item index)
    "to": 12                (last item index)
  }
}
```

---

## 13. TESTING CHECKLIST

### Manual Testing
- [ ] All endpoints return correct status codes
- [ ] Validation works (invalid inputs rejected)
- [ ] Authentication required on protected endpoints
- [ ] Cart persistence working
- [ ] Payment flow complete (create → pay → confirm)
- [ ] Email sent on subscription
- [ ] Email sent on order completion
- [ ] Download URLs valid and not exposed
- [ ] User can't access others' orders/downloads

### Load Testing (Phase 2)
- [ ] API handles 100 concurrent requests
- [ ] Database queries optimized (no N+1)
- [ ] Rate limiting working
- [ ] Error recovery working

---

**Document Version:** 1.0  
**Last Updated:** May 18, 2026  
**Next Review:** After implementation
