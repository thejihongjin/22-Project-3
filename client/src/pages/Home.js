import React, { useEffect, useContext } from "react";
import history from "../utils/history";
import AuthContext from "../context/auth/authContext";
import Carousel from "../components/Carousel";

// import "./Style.css"

const About = props => {
  const authContext = useContext(AuthContext);
  // const { isAuthenticated, user } = authContext;
  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      authContext.loadUser();
      // redirect to userpage
      history.push("/user");
    }

    // eslint-disable-next-line
  }, [isAuthenticated, history]);

  return (
      <Carousel />
  );
};

export default About;
