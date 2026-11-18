import React, { useState } from "react"
import { Link } from "react-router"
import CouponBox, { calculateCartTotal } from "../../components/CouponBox"

const UNIT_PRICE = 10

function Cart() {
    const [qty, setQty] = useState(0)
    const [coupon, setCoupon] = useState("")

    const total = calculateCartTotal(qty, UNIT_PRICE, coupon)

    return (
        <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: "720px", margin: "40px auto", padding: "0 16px" }}>
            <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <h1>Shopping Cart</h1>
                <Link to="/" data-testid="go-home">
                    Back to Shop
                </Link>
            </header>
            <section data-testid="cart-panel" style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px" }}>
                <p>
                    Items: <strong data-testid="cart-qty">{qty}</strong>
                </p>
                <p>
                    Total: <strong data-testid="cart-total">${total}</strong>
                </p>
                <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                    <button type="button" data-testid="add-item" onClick={() => setQty((q) => q + 1)}>
                        +1 Item ($10)
                    </button>
                    <button type="button" data-testid="dec-qty" onClick={() => setQty((q) => Math.max(0, q - 1))}>
                        -1 Qty
                    </button>
                </div>
                <CouponBox activeCoupon={coupon} onApply={setCoupon} />
            </section>
        </div>
    )
}

Cart.setMetaData = () => [<title key="title">Shopping Cart | Catalyst Shop</title>]

export default Cart
