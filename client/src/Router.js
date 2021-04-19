import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Client from "./pages/client"
import Product from "./pages/product"
import ProductRate from "./pages/productRate"
import Producer from "./pages/producer"
import Booking from "./pages/booking"
import Category from "./pages/category"
import Report from "./pages/report"
import Home from "./pages/home"
import NotFound from './pages/notFound';

function Router() {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Client} path="/client" exact />
      <Route component={Product} path="/product" exact />
      <Route component={ProductRate} path="/product_rate" exact />
      <Route component={Producer} path="/producer" exact />
      <Route component={Booking} path="/booking" exact />
      <Route component={Category} path="/category" exact />
      <Route component={() => <Report routeProp="booking" />} path="/booking/report" exact />
      <Route component={() => <Report routeProp="client" />} path="/client/report" exact />
      <Route component={() => <Report routeProp="product" />} path="/product/report" exact />
      <Route component={NotFound} />
    </Switch>
  )
}



export default Router
