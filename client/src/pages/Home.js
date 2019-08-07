import React, { useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import history from "../utils/history";
import Carousel from "../components/Carousel";
// import "./Style.css"

const Home = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            authContext.loadUser();
            history.push("/user"); // redirect to userpage
        }

        // eslint-disable-next-line
    }, [isAuthenticated, history]);

    return (
        <Carousel />
    );
};

export default Home;