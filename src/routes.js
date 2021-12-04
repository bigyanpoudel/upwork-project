import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import BaseLayout from './components/BaseLayout/BaseLayout';
import Home from './Home/Home';
import BuyingBTC from './Buying BTC/BuyingBTC';
import Replenishment from './Replenishment/Replenishment';
import News from './News/News';
const Routes = () => {
    return (
        <BrowserRouter>
        <BaseLayout>
        <Switch>
            <Route path="/" exact component={News}/>
            <Route path="/Продажа-BTC" exact component={Home}/>
            <Route path="/Покупка-BTC" exact component={BuyingBTC}/>
            <Route path="/Пополнения" exact component={Replenishment}/>
        </Switch>
        </BaseLayout>
        </BrowserRouter>
    )
}

export default Routes
