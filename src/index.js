import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner"

class App extends React.Component {
  constructor(props){
    super(props);//es una referencia al componente padre React.component
    
    this.state = {lat: null, error: ""};    
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat: position.coords.latitude})
      },
      (err) => {
        this.setState({error: err.message})
      }
    )
  }

  //Always try to not have more than one return in the render method
  renderContent(){
    if(this.state.error && !this.state.lat){
      return <div>Error: {this.state.error}</div>
    }
    if(!this.state.error && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner message="Please accept location request"/>
  }

  //We always have to define render!
  render(){   
    return (
      <div>
        {this.renderContent()}
      </div>
    )
    
  }
} 

ReactDOM.render(<App />, document.getElementById("root"));
