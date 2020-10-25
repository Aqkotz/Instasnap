import React from "react";
import Draggable from "react-draggable";


export default class ProfileTile extends React.Component {
    state = {
        friended: false,
    };

    constructor(props){
        super();
        this.name = props.name;
        this.year = props.year;
        this.pictureURL = props.pictureURL;
        this.major = props.major;
        this.role = props.role;
        this.quote = props.quote;
    }

    render() {
        return (
            <Draggable>
                <div className="tileCard">
                    <h6 className="nameTitle">{this.name + " '" + this.year}</h6>
                    <div><img src={this.pictureURL} alt="profile" width="75" height="75" className="profilePhoto"/></div>
                    <div className="studentInfo">
                        <p className="subInfo"><b>{this.major}</b></p>
                        <p className="subInfo"><b>{this.role}</b></p>
                        <p className="subInfo">{this.quote}</p>
                    </div>
                </div>
            </Draggable>
        );
    }
}