# Automatic Subscription Role Management Setup

This system automatically updates user roles when they pay for subscriptions through Stripe.

## Environment Variables Required

Add these to your `.env` file:

```bash
# Stripe Webhook Secret (required for webhook verification)
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Other existing variables should already be set:
# STRIPE_PRIVATE_KEY
# STRIPE_PRICE_ID_ARCHAEOLOGIST_MONTHLY
# STRIPE_PRICE_ID_ARCHAEOLOGIST_ANNUAL
# STRIPE_PRICE_ID_CURATOR_MONTHLY
# STRIPE_PRICE_ID_CURATOR_ANNUAL
```

## Stripe Webhook Setup

1. Go to your Stripe Dashboard
2. Navigate to Developers > Webhooks
3. Click "Add endpoint"
4. Set the endpoint URL to: `https://yourdomain.com/webhook` (or `http://localhost:4242/webhook` for local testing)
5. Select these events to listen for:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
6. Copy the webhook signing secret and add it to your `.env` file as `STRIPE_WEBHOOK_SECRET`

## How It Works

1. **User subscribes**: When a user completes payment, Stripe sends a webhook to `/webhook`
2. **Role update**: The system automatically updates the user's role based on their plan:
   - Archaeologist plan → `archaeologist` role
   - Curator plan → `curator` role
3. **Subscription tracking**: The system tracks subscription status, renewal dates, and Stripe customer/subscription IDs
4. **Automatic role reversion**: If a subscription is cancelled, the user's role automatically reverts to `explorer`

## New API Endpoints

- `POST /webhook` - Stripe webhook handler (automatically updates roles)
- `GET /subscription-info` - Get detailed subscription information
- `POST /cancel-subscription` - Cancel current subscription
- `PUT /update-role` - Manual role update (for testing, can be removed later)

## Database Changes

The User model now includes a `subscription` object with:
- `status`: 'active', 'inactive', or 'canceled'
- `plan`: 'Archaeologist' or 'Curator'
- `stripeCustomerId`: Stripe customer ID
- `stripeSubscriptionId`: Stripe subscription ID
- `currentPeriodEnd`: When current period ends

## Testing

1. Start your server
2. Use Stripe CLI to test webhooks locally:
   ```bash
   stripe listen --forward-to localhost:4242/webhook
   ```
3. Make a test subscription payment
4. Check that the user's role is automatically updated

## Security Notes

- Webhook signatures are verified using `STRIPE_WEBHOOK_SECRET`
- Only authenticated users can access subscription endpoints
- Role updates only happen through verified Stripe webhooks
