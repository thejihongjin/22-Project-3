import React, { Fragment, useContext, useEffect } from "react";
import ViewUser from "./ViewUser";
import EventContext from "../../context/event/eventContext";
import AuthContext from "../../context/auth/authContext";

const UserList = () => {
   
              const eventContext = useContext(EventContext);
  const authContext = useContext(AuthContext);
  const { viewUser } = authContext;
  const { events, getUserEvents } = eventContext;
  console.log(events)
  let createdEvent;
  let joinedEvent;

  useEffect(() => {
    getUserEvents();

    

  }, []);



  return (
    <Fragment>
      <div>
        {createdEvent.map(event => (
          <ViewUser key={event._id} event={event} />
        ))}
      </div>
    </Fragment>
  );
};
      


export default UserList
