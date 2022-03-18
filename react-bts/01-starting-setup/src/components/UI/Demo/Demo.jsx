import React from "react";
import Meow from "./Meow";

const DemoOutput = ({ show }) => {
    // console.log("in demo")
    return (
        <><p>{show ? "HenlO!" : ""}</p> <Meow /></>
    );
};

export default React.memo(
    DemoOutput
);