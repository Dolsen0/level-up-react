import { Button, ButtonGroup, Card } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

export function Physical() {
  const [physicalTime, setPhysicalTime] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${physicalTime} times`;
  });

  return (
    <>
      <Card
        bg="secondary"
        text="white"
        onClick={() => {
        }}
      >
        <Card.Header as="h6">Physical</Card.Header>
        <Card.Body id="physical">{physicalTime}</Card.Body>
        <ButtonGroup>
          <Button variant="secondary" onClick={() => setPhysicalTime(15)}>20 Minutes or less</Button>
          <Button variant="secondary" onClick={() => setPhysicalTime(20)}>40 Minutes</Button>
          <Button variant="secondary" onClick={() => setPhysicalTime(25)}>60 Minutes or more</Button>
        </ButtonGroup>
      </Card>
    </>
  );
}
