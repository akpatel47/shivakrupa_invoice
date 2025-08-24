import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import GeneratePdfInvoice from "./components/GeneratePdfInvoice";
import GeneratePdfInvoiceImage from "./components/GeneratePdfInvoiceImage";
function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" exact element={<GeneratePdfInvoice />} />
        <Route path="/image" exact element={<GeneratePdfInvoiceImage />} />
      </Routes>
    </div>
  );
}

export default App;
