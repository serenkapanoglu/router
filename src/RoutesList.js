import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Soda from "./Soda";
import Fresh from "./Fresh";
import Chips from "./Chips";

function RoutesList() {
    return (
        <div>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/soda" element={<Soda />} />
            <Route path="/chips" element={<Chips />} />
            <Route path="/fresh" element={<Fresh />} />
            </Routes>
        </div>
    )

}

export default RoutesList;
