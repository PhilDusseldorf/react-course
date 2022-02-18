import React from "react";

function Joke(params) {

    return (
        <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            <p style={{ display: !params.question && "none", color: "grey" }}>
                Question: {params.question}
            </p>
            <p style={{ textIndent: params.question && "20px", color: !params.question && "grey" }}>
                Punchline: {params.punchline}
            </p>
        </div >
    );
}

export default Joke;