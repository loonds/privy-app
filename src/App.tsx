import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AppIndex from "./pages";

function App(props: any) {
    console.log("Root Component of the React App");
    return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AppIndex}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
