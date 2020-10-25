import React from "react";

export default class TeamsRegion extends React.Component{

    render(){
        return(
            <div>
                {["APIs Team:","Web Development:","IOS Team:","Other Projects:"].map((teamName,i) => {
                    return(
                        <div className="teamContainer" key="i">
                            <h5 className="nameTitle">{teamName}</h5>
                            <div className="teamBox"></div>
                        </div>
                    )
                })}
            </div>
        )
    }
}