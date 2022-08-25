import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import theme from "./theme";
import { themeProvider } from 'styled-component'

ReactDOM.render(
<themeProvider>
<App />
</themeProvider>
, document.getElementById("root"));
