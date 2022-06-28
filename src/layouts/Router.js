import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from '../layouts/Main'
import About from '../layouts/About'

const RouterNavigator = (props) => (
    <BrowserRouter>
        {props.children}
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
)

export default RouterNavigator