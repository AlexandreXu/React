// App.js
import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import LayoutMain from "./layouts/LayoutMain/LayoutMain";
import Home from "./containers/Home/Home";
import NotFound from "./containers/NotFound/NotFound";
import Location from "./containers/Location/Location";

function App() {
    return (
            <div className="App">
                <LayoutMain>
                    <BrowserRouter>
                        <Routes>
                            <Route path='home' element={<Home/>}/>
                            <Route path='location/:id' element={<Location/>}/>
                            <Route path="/404" element={ <NotFound /> } />
                            <Route path="*" element={ <Navigate to="/404" />} />
                        </Routes>
                    </BrowserRouter>
                </LayoutMain>
            </div>
    );
}

export default App;
