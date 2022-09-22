import React, { Component } from 'react'
import UserApiCall from './UserApiCall';

class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { client: '' };
    }

    setMichael = () => {
        this.setState({ client: 'Michael' });
    };
    
    setNora = () => {
        this.setState({ client: 'Nora' });
    };
    
    render() {
        return (
            <div>
                <button onClick={this.setMichael}>Michael</button>
                <button onClick={this.setNora}>Nora</button>
                <UserApiCall client={this.state.client} />
            </div>
        );
    }
}

export default UserDetails
