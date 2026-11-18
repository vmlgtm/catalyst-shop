# Catalyst Pharmacy & Shop (`runbox` Example App)

A multi-route universal SSR pharmacy & shopping app built with [Catalyst (`catalyst-core`)](https://github.com/tata1mg/catalyst-core) and verified end-to-end with [`runbox`](https://github.com/vmlgtm/runbox).

## Routes & Features

- **`/`** ([src/js/containers/Home/Home.js](src/js/containers/Home/Home.js)) — Catalog with category filters (`All`, `Vitamins`, `Pain Relief`, `Diagnostics`, `Personal Care`), search, price sorting, and links to `/product/:id`
- **`/product/:id`** ([src/js/containers/ProductDetail/ProductDetail.js](src/js/containers/ProductDetail/ProductDetail.js)) — Product configurator with dosage (`250mg`/`500mg`/`1000mg`), pack size (`1x`/`2x`/`3x`), and stock-bounded quantity `+`/`-`
- **`/cart`** ([src/js/containers/Cart/Cart.js](src/js/containers/Cart/Cart.js)) — Multi-item cart using [src/js/utils/pricingEngine.js](src/js/utils/pricingEngine.js) and [src/js/components/CouponBox.js](src/js/components/CouponBox.js) (`SAVE20`, `HALF50`, `FREESHIP`, Express Delivery, Gift Wrap, and itemized totals)
- **`/orders`** ([src/js/containers/Orders/Orders.js](src/js/containers/Orders/Orders.js)) — Order history with status filters and refill requests

---

## Running on Another Machine

### 1. Install and link `runbox` globally (once per machine)

```bash
git clone https://github.com/vmlgtm/runbox.git
cd runbox
pnpm install
pnpm run build
npm link
```

*(Ensure Playwright Chromium or Google Chrome is installed; if needed run `npx playwright install chromium`.)*

### 2. Clone and install `catalyst-shop`

```bash
git clone https://github.com/vmlgtm/catalyst-shop.git
cd catalyst-shop
npm install
```

### 3. Run the app or verify with `runbox`

```bash
# Run static guardrails & diff-to-feature mapping
runbox check

# Boot Catalyst SSR, run all 4 route journeys + telemetry traps + fast-check fuzzing
runbox verify --fuzz --seed 0x42

# Inspect the generated Proof Bundle & Mermaid statechart
cat .runbox/proof/report.md

# Or run the app manually in the browser (http://localhost:3005)
npm start
```
