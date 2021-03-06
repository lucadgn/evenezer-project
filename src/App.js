/*----------------------------------- Imports -----------------------------------*/
//DOM
import logo from "./logo.svg";

//React
import { Component } from "react";

//Assets
import "./assets/tailwind.css";
import "./styles/App.css";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Containers
import HomeContainer from "./containers/HomeContainer";
import ProductsContainer from "./containers/ProductsContainer";
import ProductDetailContainer from "./containers/ProductDetailContainer";
import AboutContainer from "./containers/AboutContainer";
import CartContainer from "./containers/CartContainer";
import CheckoutContainer from "./containers/CheckoutContainer";

//React Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Context
import { GlobalContext, GlobalProvider } from "./store/GlobalContext";
import { CartContext, CartProvider } from "./store/CartContext";

/*--------------------------------- Aplication ----------------------------------*/

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <CartProvider>
            <Route exact path="/">
              <HomeContainer />
            </Route>
            <Route exact path="/category/:categoryId">
              <ProductsContainer />
            </Route>
            <Route exact path="/item/:id">
              <ProductDetailContainer />
            </Route>
            <Route exact path="/cart">
              <CartContainer />
            </Route>
            <Route exact path="/checkout">
              <CheckoutContainer />
            </Route>
          </CartProvider>
          <Route exact path="/about">
            <AboutContainer />
          </Route>
          <Route path="*" children={<main>Not found</main>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
