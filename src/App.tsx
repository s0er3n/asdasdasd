import * as React from "react";
import Nav from "../components/nav";
import { Router } from "@reach/router";
import "./styles.css";
import Map from "../components/map";
import AddLocation from "../components/addlocation";
export default function App() {
  return (
    <div>
      <Nav />
      <Router>
        <AddLocation path="addlocation" />
        <Map path="/" />
      </Router>
    </div>
  );
}
