import React from "react";
import { Col, Row } from "react-bootstrap";
import Rating from "react-rating"

function Techstack(props) {
  return (
    <>
    <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
       <Col className="skill-name">
        {props.name}
      </Col>
      <Col xs={6}>
        <Rating
          readonly
          start={0}
          stop={5}
          initialRating={props.initialRating}
        />
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
