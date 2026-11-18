import React from "react"
import { Link } from "react-router"

const PRODUCTS = [
    { id: "vit-c", name: "Vitamin C 500mg", price: 10 },
    { id: "omega-3", name: "Omega-3 Fish Oil", price: 10 },
    { id: "electrolyte", name: "Electrolyte Pack", price: 10 },
]

function Home() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: "720px", margin: "40px auto", padding: "0 16px" }}>
            <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <h1>Catalyst Pharmacy & Shop</h1>
                <Link to="/cart" data-testid="go-to-cart">
                    Go to Cart
                </Link>
            </header>
            <main>
                <p>Universal SSR Storefront built with Catalyst.</p>
                <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
                    {PRODUCTS.map((item) => (
                        <div key={item.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "12px" }}>
                            <strong>{item.name}</strong> — ${item.price}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

Home.setMetaData = () => [<title key="title">Catalyst Pharmacy & Shop</title>]

export default Home
