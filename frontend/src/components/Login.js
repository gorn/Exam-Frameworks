import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }
    handleInputChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    };
    onSubmit = event => {
      event.preventDefault();
      console.log(this.state)
      if (this.state.password === 'a') {
        localStorage.setItem('loggedin','yes')
      } else {
        console.error('Wrong password')          
      }
    };
    render() {
        if (localStorage.getItem('loggedin')==='yes') {
          return(
              <div>Already logged in, continue to 
                <Link to ={"/"}> <p>homepage</p></Link> or
                <Link to ={"/posts"}> <p>job posts</p></Link>
              </div>
          )
        } else {
            return(
                <form onSubmit={this.onSubmit}>
                    <h1>Login for posting jobs</h1>
                    <div>
                        <input
                            type="name"
                            name="userName"
                            value={this.state.userName}
                            onChange={this.handleInputChange}
                            placeholder="Username"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder="password "
                            required
                        />
                    </div>
                    <input type="submit" value="submit"/>
                </form>
            )
        }
    }
}
export default Login;

