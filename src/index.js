import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header";
import Menu from "./components/meun";
import Footer from "./components/footer";

// Main App
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
