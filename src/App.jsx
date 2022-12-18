import 'bootswatch/dist/litera/bootstrap.css';
import './index.css';
import Header from "./components/Header/Header";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Statement from "./components/Statement/Statement";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Statement />} />
                <Route path="/statements" element={<Statement />} />
            </Routes>
        </>
    );
}

export default App;
