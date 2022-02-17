import React from "react";

function Joke(params) {

    function Question() {
        return (params.question ? params.question : '');

    }

    return (
        <div>
            <Question />
            <p style={{ textIndent: "20px" }}>
                Punchline: {params.punchline}
            </p>
        </div >
    );
}

export default Joke;