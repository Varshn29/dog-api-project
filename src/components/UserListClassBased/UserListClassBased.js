import React, { Component } from "react";
import axios from 'axios';
import UsersData from "./UsersData";

class UserListClass extends Component {

    constructor() {
        super()
        this.state = {
            users: [],
            page: 0,
            isLoading: false,
            errorMsg: ''
        };
    }

    componentDidMount() {
        this.loadUsers();
    }

    handleClick = () => {
       return this.setState((prevState) => ({
            page: prevState.page + 1
        }));
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            this.loadUsers();
        }
    }

    loadUsers() {
        const { page, users } = this.state;
        this.setState({ isLoading: true });
        axios
            .get(`https://randomuser.me/api/?page=${page}&results=10`)
            .then((response) => {
                this.setState({
                    users: [...users, ...response.data.results],
                    errorMsg: ''
                });
            })
            .catch((error) =>
                this.setState({
                    errorMsg: 'Error while loading data. Try again later.'
                })
            )
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    render() {
        const { users, isLoading, errorMsg } = this.state;

        return (
            <div className="main-section">
                {isLoading && <p className="loading">Loading...</p>}
                {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                <UsersData userData={users} click={this.handleClick} />
            </div>
        );
    }
}

export default UserListClass