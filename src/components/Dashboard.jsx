import { Route, BrowserRouter as Router } from "react-router-dom"
import React from "react";
import Sidebar from "./Sidebar";
import Home from "../pages/Home";
import Masters from "../pages/Masters";

export default function Dashboard(){
    return(
        <Router>
            <Navbar/>
            <div className="flex">
                <Sidebar/>
            </div>

            <div className="content">
                <Route path="/" exact={true} Component={Home}/>
                <Route path="/" exact={true} Component={Masters}/>

            </div>
        </Router>
    )
}