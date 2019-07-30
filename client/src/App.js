import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import API from "./utils/API";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";
const About = React.lazy(() => import("./pages/About")); // change to Home
const User = React.lazy(() => import("./pages/User"));
const CreateEvent = React.lazy(() => import("./pages/CreateEvent"));
const UserReview = React.lazy(() => import("./pages/UserReview"));
const SearchEvent = React.lazy(() => import("./pages/SearchEvent"));

class App extends Component {
    state = {
        currentUser: "",
        showRegister: false,
        showSignin: false,
        newUsername: "",
        newEmail: "",
        newPassword: "",
        newPasswordMatch: "",
        redirect: false
    }

    //

    setRedirect = () => this.setState({ showRegister: false, redirect: true }, () => this.renderRedirect());
    renderRedirect = () => {
        console.log(this.state.redirect);
        if (this.state.redirect) {
            return <Redirect to='/user' />
        }
    }
    //

    handleShowRegister = () => this.setState({ showRegister: !this.state.showRegister });

    handleShowSignin = () => this.setState({ showRegister: !this.state.showRegister });

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.newPassword !== this.state.newPasswordMatch) {
            alert("Passwords must match!");
        }
        API.registerUser(
            {
                username: this.state.newUsername,
                displayname: this.state.newUsername,
                email: this.state.newEmail,
                password: this.state.newPasswordMatch
            },
            result => {
                console.log(result);
                this.setRedirect();
            }
        )
        // .then(result => {
        //     console.log(result);
        //     this.setRedirect();
        // })
        // console.log("submit form")
    }

    render() {
        return (
            <Router>
                <Navigation />
                <React.Suspense fallback={<Loading />}>
                    <Switch>
                        {" "}
                        <Route exact path="/" render={(props) => <About {...props}
                            // showRegister={this.state.showRegister}
                            handleShowRegister={this.handleShowRegister}
                            // showSignin={this.state.showSignin}
                            handleShowSignin={this.handleShowSignin} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}
                            state={this.state} />} />
                        {/* <Route exact path="/about" component={About} /> */}
                        <Route exact path="/user" component={User} />
                        <Route exact path="/create" component={CreateEvent} />
                        <Route exact path="/review" component={UserReview} />
                        <Route exact path="/search" component={SearchEvent} />
                        <Route render={() => <h1>404 Page not found.</h1>} />
                    </Switch>
                </React.Suspense>
            </Router>
        );
    }
}

export default App;