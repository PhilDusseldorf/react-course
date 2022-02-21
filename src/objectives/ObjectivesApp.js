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
*/

/* Objective 5 MAPPING
import React from "react";
import Product from "./Product";
import productsData from "./productsData.js";

function ObjectivesApp() {

    const productComponents = productsData.map(item => <Product key={item.id} myName={item.name} description={item.description} price={item.price} />)

    return (
        <div>
            {productComponents}
        </div>
    )
}

export default ObjectivesApp;
 */

 // Objective 6 STATE
 /* First Task:
import React, {Component} from "react";

class ObjectivesApp extends Component {

    constructor() {
        super();
        this.state = {
            name: "Phil",
            age: "36"
        }
    }
    
    render() {
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        );
    }
}

export default ObjectivesApp;
  */

/* Second Task: Ix it and make it work
 */
import React, {Component} from "react";

class ObjectivesApp extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return (
         <div>
            <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
        </div>
        )
    }
}

export default ObjectivesApp;
