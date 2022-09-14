import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashBoard from "../components/DashBoard/DashBoard";
import Navigation from "../components/Navigation/Navigation";
import ListOfBreeds from '../components/ListOfBreeds/ListOfBreeds';
import RandomImage from '../components/RandomImage/RandomImage';
import ByBreed from '../components/ByBreed/ByBreed';
import BrowseBreed from '../components/BrowseBreed/BrowseBreed'
import NoMatch from "../components/NoMatch";

function Router() {

    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path='/' component={DashBoard} exact={true} />
                <Route path='/list-of-breeds' component={ListOfBreeds} />
                <Route path='/random-image' component={RandomImage} />
                <Route path='/by-breed' component={ByBreed} />
                <Route path='/browse-breed-list' component={BrowseBreed} />
                <Route path='*' component={NoMatch} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;