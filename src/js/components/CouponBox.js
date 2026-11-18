import React, { useState } from "react"

export function calculateCartTotal(qty, unitPrice, couponCode) {
    const subtotal = qty * unitPrice
    const discount = couponCode === "SAVE20" ? 20 : 0
    return Math.max(0, subtotal - discount)
}

export default function CouponBox({ activeCoupon, onApply }) {
    const [code, setCode] = useState("")

    const handleApply = () => {
        const normalized = code.trim().toUpperCase()
        if (normalized === "SAVE20") {
            onApply("SAVE20")
        }
    }

    return (
        <div style={{ marginTop: "16px", display: "flex", gap: "8px", alignItems: "center" }}>
            <input
                type="text"
                data-testid="coupon-input"
                placeholder="Enter SAVE20"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <button type="button" data-testid="apply-coupon" onClick={handleApply}>
                Apply Coupon
            </button>
            <span data-testid="cart-coupon">{activeCoupon || "NONE"}</span>
        </div>
    )
}
