import "./App.css";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Footer from "./Components/Footer.js";
import { createBrowserRouter, Outlet, useParams } from "react-router-dom";
import Categories from "./Components/Categories.js";
import Collections from "./Components/Collections.js";
import CartPage from "./Components/CartPage.js";
import AboutUs from "./Components/AboutUs.js";
import LoginPage from "./Components/LoginPage.js";
import Admin from "./Components/Admin.js";
import ProductDetail from "./Components/ProductDetail.js";
function App() {
  
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/home",
        element: <Body></Body>,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/collections",
        element: <Collections></Collections>,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/loginpage",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/adminpage",
        element: <Admin></Admin>,
      },
      {
        path: "/product/:id",
        element: <ProductDetail></ProductDetail>,
      },
    ],
  },
]);
export default appRouter;
