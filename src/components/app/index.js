import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Game from "../../pages/game";
import MainPage from "../../pages/main-page/main-page";
import Settings from "../../pages/settings";
import './app.css';
import ErrorPage from "../../pages/error-page";
import RulesPage from "../../pages/rules-page/rules-page";

export function App(){

  
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <MainPage/>}></Route>
                    <Route path="/settings" element={ <Settings/> }></Route>
                    <Route path="/game/:id" element={ <Game /> }></Route>
                    <Route path="/rules" element={ <RulesPage/> }></Route>
                    <Route path="*" element={ <ErrorPage/> }></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}