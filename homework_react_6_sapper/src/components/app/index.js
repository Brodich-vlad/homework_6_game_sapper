import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Game from "../../pages/game";
import MainPage from "../../pages/main-page/main-page";
import Settings from "../../pages/settings";
import './app.css';
import ErrorPage from "../../pages/error-page";

export function App(){

    const clickNav=(e)=>{
        console.log(e)
    }
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <MainPage/>}></Route>
                    <Route path="/settings" element={ <Settings/> }></Route>
                    <Route path="/game/:id" element={ <Game clickNav={clickNav}/> }></Route>
                    <Route path="*" element={ <ErrorPage/> }></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}