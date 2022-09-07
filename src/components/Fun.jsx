import { useEffect } from "react";
import { useState } from "react";
import { ButtonGroup, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button"

export function Fun() {
  const [funTime, setFunTime] = useState(0);

  useEffect(() => {
    fetch("https://level-up-do.web.app/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((response) => response.score)
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Card bg="info" text="white">
        <Card.Header as="h6">Fun</Card.Header>
        <Card.Body id="fun">{funTime}</Card.Body>
        {/* <Card.Footer>  */}
          <ButtonGroup>
            <Button variant="info" onClick={() => setFunTime(15)}>20 Minutes</Button>
            <Button variant="info" onClick={() => setFunTime(20)}>40 Minutes</Button>
            <Button variant="info" onClick={() => setFunTime(25)}>60 Minutes or more</Button>
            </ButtonGroup> 
          {/* </Card.Footer> */}
      </Card>
    </>
  );
}
