import {React, useEffect, useState} from "react"
import Banner from "../components/Banner"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Movies from "../components/Movies"
import { Outlet } from "react-router"

export default function Main(){
  
    return (<div className="p-3">
    <Header/>
    <Navigation/>
    <Outlet/>
    </div>);
}