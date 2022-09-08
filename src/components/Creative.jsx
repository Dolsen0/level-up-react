import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export function Creative() {
  const [creativeTime, setCreativeTime] = useState(0);

  useEffect(() => {
    fetch("https://level-up-do.web.app/user")
    .then(response => response.json())
    .then(response => response.score)
    .catch((err) => console.error(err))
  },[]);

  return (
    <>
      <Card
        bg="warning"
        text="white"
        
      >
        <Card.Header as="h6">Creative</Card.Header>
        <Card.Body id="creative" variant="outline-primary">
          {creativeTime}
        </Card.Body>
        <ButtonGroup>
          <Button variant="warning" onClick={() => setCreativeTime(15)}>20 Minutes or less</Button>
          <Button variant="warning" onClick={() => setCreativeTime(20)}>40 Minutes</Button>
          <Button variant="warning" onClick={() => setCreativeTime(25)}>60 Minutes or more</Button>
        </ButtonGroup>
      </Card>
    </>
  );
}
