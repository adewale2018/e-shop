import "./Directory.scss";

import { Component } from "react";
import { sections } from "./DirectoryData";
import MenuItem from "../menu-item/MenuItem";

class Directory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: sections,
        };
    }
    render() {
        return ( <
            >
            <
            div className = "directory-menu d-flex flex-wrap justify-content-between" > {
                this.state.sections.map(({ id, ...otherProps }) => ( <
                    MenuItem key = { id } {...otherProps }
                    />
                ))
            } <
            /div> < / >
        );
    }
}

export default Directory;