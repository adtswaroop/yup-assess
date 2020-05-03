import React from 'react';
import logo from './logo.svg';
import './App.css';
import Thumbnail from './Thumbnail';

class App extends React.Component{

  constructor(props){
        super(props);
        this.state = {
            dataFetched: false,
            jsonData: [],
            errorInFetch: false,
            error: ""
        }
    }

    componentDidMount(){
        fetch("https://api.yup.io/posts/post/12294")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState(
              {
                dataFetched: true,
                jsonData: result
              }
            );
          }, 
          (error) => {
            console.log("Error:" + error);
            this.setState({
              dataFetched: true,
              errorInFetch: true,
              error: error.toString()
            });
          }
        )
    }

    render(){
      if(!this.state.dataFetched)
      {
        return <div align="center">
          Fetching data. Please wait...
        </div>
      }
      else if(this.state.errorInFetch)
      {
        return <div align="center">
          Could not complete GET request. 
          <br>{this.state.error}</br>
        </div>
      }
      else{
        return (
            <div>
                  <Thumbnail tmbdata= {this.state.jsonData}/>
            </div>
        )
      }
    }
}

export default App;
