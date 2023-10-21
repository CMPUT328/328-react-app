import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Amplify, Auth } from "aws-amplify";
// import config from "./aws-exports";
// Amplify.configure(config);

// Auth.currentCredentials()
//   .then((credentials) => {
//     console.log("Guest credentials", credentials);
//   })
//   .catch((err) => console.error(err));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
