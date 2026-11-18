import { split } from "catalyst-core"

const Home = split(() => import("@containers/Home/Home"))
const Cart = split(() => import("@containers/Cart/Cart"))

const routes = [
    {
        path: "/",
        end: true,
        component: Home,
    },
    {
        path: "/cart",
        end: true,
        component: Cart,
    },
]

export default routes
