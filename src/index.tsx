import React from "react";
import { render } from "react-dom";
import MainApp from './MainApp';
// Import F7 Bundle
import Framework7 from "framework7/framework7-lite.esm.bundle.js";
// Import F7-React Plugin
import Framework7React from "framework7-react";
// Import Framework7 Styles
import "framework7/css/framework7.bundle.css";
import "./css/icons.css";

// Init F7-React Plugin
Framework7.use(Framework7React);

const rootElement = document.getElementById("root");
render(<MainApp />, rootElement);
