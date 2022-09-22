import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserDetails } from '../../redux/action/userDetailsAtion'

class UserApiCall extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] };
    }

    componentDidMount() {
        this.props.fetchUserDetails()
    }

    fetchData = client => {
        setTimeout(() => {
            this.setState({
                projects:
                    client === 'Michael'
                        ? ['Project Aiden', 'Project Brook']
                        : ['Project Cecilia', 'Project Delta']
            });
        }, 300);
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.client !== this.props.client) {
            this.fetchData(this.props.client);
        }
    }
    render() {

        return (
            <div>
                <b>Projects for {this.props.client}</b>
                <ul>
                    {this.state.projects.map(project => (
                        <li>{project}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.userDetailsData
    }
}

const mapDispatchToProps = {
    fetchUserDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(UserApiCall)