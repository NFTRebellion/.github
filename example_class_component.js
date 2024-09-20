// Modify the class component code below: Given this incomplete react component, disable the button if there is no character or value in the text input. 

import React, {Component} from "react";
import {
    Button
} from "@mui/material";

export default class ExampleComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ""
        }
        this.someFunction = this.someFunction.bind(this);
    }

    someFunction() {
        console.log("data value:", this.state.data);
    }

    render() {
        return (
            <React.Fragment>
                <input type="text"/>
                <Button onClick={this.someFunction}>
                    Submit
                </Button>
            </React.Fragment>
        )
    }
}
