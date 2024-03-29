import React, { Component } from 'react'
import axios from 'axios'
import { url } from '../Constants';

export default class CreateUser extends Component {

    constructor(props) {
        super(props);
    
        // Binding all the fn's or events
        // if we dont want to do this then we can use arrow fn's instead of normal fn's to avoid the need of binding
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: "",
        };
      }

      onChangeUsername(e) {
        this.setState({
          username: e.target.value,
        });
      }

      onSubmit(e) {
        e.preventDefault();
    
        const user = {
          username: this.state.username
        };
        
        console.log('username',user);
    
        axios.post(`${url}/users/add`, user)
        .then(res => console.log(res.data))

    
        this.setState({
            username: ''
        })
      }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type='submit' value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
