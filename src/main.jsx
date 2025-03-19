import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout>
      <Navbar />
      <Main />
    </Layout>
  </StrictMode>
);
