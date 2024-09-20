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
                <Button>Submit</Button>
            </React.Fragment>
        )
    }
}
