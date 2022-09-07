import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";

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
      <Card bg="info" text="white" onClick={() => setFunTime(funTime + 15)}>
        <Card.Header as="h6">Fun</Card.Header>
        <Card.Body id="fun">{funTime}</Card.Body>
      </Card>
    </>
  );
}
