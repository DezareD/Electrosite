import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from '../layouts/Main'
import About from '../layouts/About'
import Contacts from "./Contacts";
import GalleryPage from "./Gallery";

const RouterNavigator = (props) => (
    <BrowserRouter>
        {props.children}
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/gallery" element={<GalleryPage/>} />
        </Routes>
    </BrowserRouter>
)

export default RouterNavigator