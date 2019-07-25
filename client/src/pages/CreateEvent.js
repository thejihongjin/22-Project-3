import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    paddingTop: 30,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250
  }
}));

export default function CreateEvent() {
  const classes = useStyles();


  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-default">
                        Event Name:
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-default">
                        Event Location:
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                </Form.Group>
                <Row>
                  {" "}
                  <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Event Type</Form.Label>
                      <Form.Control as="select">
                        <option>Movie</option>
                        <option>Concert</option>
                        <option>Food/Drink</option>
                        <option>Bar/Club</option>
                        <option>Gaming</option>
                        <option>Coding</option>
                        <option>Party</option>
                        <option>Conversation</option>
                        <option>Other</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Group Size</Form.Label>
                      <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5+</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Event Details:</Form.Label>
                      <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                  </Col>
                  <div className={classes.container} noValidate>
                    <TextField
                      id="datetime-local"
                      label="Set Date & Time"
                      type="datetime-local"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </div>{" "}
                </Row>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
