/* Objective 3

import React from "react";

import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Footer from "./Footer";

function ObjectivesApp() {
    return (
        <div>
        <Navbar />
        <MainContent />
        <Footer />
        </div>
        
        );
    }
    
    export default ObjectivesApp;
*/

/* Objective 4 PROPS
*/

import React from "react";

import Joke from "./Joke";

function ObjectivesApp() {

    let i = 0;

    const questionArray = ["What gets taste from a bag and can be worn?", "Why so serious?", "What is white and hides behind a tree?"];
    const punchlineArray = ["A Tea-Shirt!", "The Joker", "A shy milk!", "It's hard to explain jokes to cleptomaniacs as they always take things literally."]

    return (
        <div>
            {
                punchlineArray.map(e => < Joke question={questionArray[i]} punchline={punchlineArray[i++]} />)
            }
        </div>
    )
}

export default ObjectivesApp;