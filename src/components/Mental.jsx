// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export function Mental() {
  const [mentalTime, setMentalTime] = useState(0);

  useEffect(() => {
    console.log(`you clicked mental worth ${mentalTime} points`);
  });

  return (
    <>
      <Card
        bg="primary"
        text="white"
      >
        <Card.Header as="h6">Mental</Card.Header>
        <Card.Body bg="secondary" id="mental">
          {mentalTime}
        </Card.Body>
        <ButtonGroup>
          <Button variant="primary" onClick={() => setMentalTime(15)}>20 Minutes or less</Button>
          <Button variant="primary" onClick={() => setMentalTime(20)}>40 Minutes</Button>
          <Button variant="primary" onClick={() => setMentalTime(25)}>60 Minutes or more</Button>
        </ButtonGroup>
      </Card>
    </>
  );
}
