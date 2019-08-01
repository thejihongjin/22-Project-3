import React from "react"
import Card from "react-bootstrap/Card"

const EventCard = (props)=>{
    return(
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                    <Card.Title>Go To Japan</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Travel
                    </Card.Subtitle>
                    <Card.Text>
                        Looking for someone to go to Japan with.
                    </Card.Text>
                <Card.Link href="#">View Event</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default EventCard