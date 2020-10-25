import React from "react";
import ProfileTile from "./ProfileTile";

export default class TileRegion extends React.Component{
    state={
      users: []
    }

    constructor(props){
        super();
        fetch(`./DALI_Data.json`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }})
             .then(response => response.json())
             .then(data => {
                 this.setState({users:data});
             })
    
             console.log(this.state.users)
    }

    render(){
      

        return(
            <div>
                {this.state.users.map((user, i) => {
                    return (<ProfileTile key={i} name={user.name} year={user.year} pictureURL={user.picture} major={user.major} role={user.role} quote={user.quote} />);
                })
                }
                {this.props.children}
            </div>
        );
    }
}