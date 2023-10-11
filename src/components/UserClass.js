import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 10,
            // count2:20,
        }

        console.log("constuctor called");
    }


    componentDidMount(){
      console.log("componentDidMount called");
    }
  render() {
    console.log("render called");

    const {name, location} = this.props;
    const {count} = this.state;
    
    return (
      <div className="user-card">
        <h3>{name}</h3>
        <h3>Count = {this.state.count} </h3>
        <button onClick={()=>{
          return this.setState( {
            count: count+1,
          })
        }}>Count badhao</button>
        {/* <h3>Count2 = {count2} </h3> */}
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;