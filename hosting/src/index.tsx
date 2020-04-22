import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";

// please replace it to yours
const firebaseConfig = {
  apiKey: "AIzaSyDZMdJzWoiFi_GAvY-tPV6-A2VAPHWEyBo",
  authDomain: "functions-repro.firebaseapp.com",
  databaseURL: "https://functions-repro.firebaseio.com",
  projectId: "functions-repro",
  storageBucket: "functions-repro.appspot.com",
  messagingSenderId: "1091479376393",
  appId: "1:1091479376393:web:cd5d6f4b01249d35a19ed8",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
