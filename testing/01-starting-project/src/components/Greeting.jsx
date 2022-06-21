import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
    const [text, setText] = useState("Hello World!")
    const [show, setShow] = useState(true)


    return (
        <div>
            <Output>{text}</Output>
            {show && <p>It's good to see you!</p>}
            <button id="this-butt" onClick={() => setText(text => text === "Hello World!" ? "Changed" : "Hello World!") || setShow(prev => !prev)}>Change text</button>
        </div>
    );
};

export default Greeting;