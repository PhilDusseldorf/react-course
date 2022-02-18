import React from "react";

function Joke(params) {

    function Question() {
        return (params.question ? params.question : '');

    }

    return (
        <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            <p style={{ display: !params.question && "none" }}>
                Question: {params.question}
            </p>
            <p style={{ textIndent: params.question && "20px" }}>
                Punchline: {params.punchline}
            </p>
        </div >
    );
}

export default Joke;