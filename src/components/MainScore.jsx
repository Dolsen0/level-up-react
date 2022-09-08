import { useEffect, useState } from "react";
import { Button, ButtonGroup, CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Creative } from "./Creative";
import { Fun } from "./Fun";
import { Mental } from "./Mental";
import { Physical } from "./Physical";

export default function MainScore() {
  let [mainScore, setMainScore] = useState(0);
  const [creativeTime, setCreativeTime] = useState(0);
  const [funTime, setFunTime] = useState(0);
  const [physicalTime, setPhysicalTime] = useState(0);
  const [mentalTime, setMentalTime] = useState(0);
  const categories = [
    <Mental />,
    <Creative />,
    <Physical />,
    <Fun />, 
  ]
  


  useEffect(() => {
    // fetch("http://localhost:5785/user")
      fetch("https://level-up-do.web.app/user")
      .then((results) => results.json())
      .then((results) => setMainScore(results.score))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
<CardGroup>
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

      <Card bg="info" text="white">
        <Card.Header as="h6">Fun</Card.Header>
        <Card.Body id="fun">funTime</Card.Body>
        {/* <Card.Footer>  */}
          <ButtonGroup>
            <Button variant="info" onClick={() => setFunTime(15)}>20 Minutes or less</Button>
            <Button variant="info" onClick={() => setFunTime(20)}>40 Minutes</Button>
            <Button variant="info" onClick={() => setFunTime(25)}>60 Minutes or more</Button>
            </ButtonGroup> 
          {/* </Card.Footer> */}
      </Card>


      <Card
        bg="primary"
        text="white"
      >
        <Card.Header as="h6">Mental</Card.Header>
        <Card.Body bg="secondary" id="mental">
          {}
        </Card.Body>
        <ButtonGroup>
          <Button variant="primary" onClick={() => setMentalTime(15)}>20 Minutes or less</Button>
          <Button variant="primary" onClick={() => setMentalTime(20)}>40 Minutes</Button>
          <Button variant="primary" onClick={() => setMentalTime(25)}>60 Minutes or more</Button>
        </ButtonGroup>
      </Card>
      


      <Card
        bg="secondary"
        text="white"
        onClick={() => {
        }}
      >
        <Card.Header as="h6">Physical</Card.Header>
        <Card.Body id="physical">physicalTime</Card.Body>
        <ButtonGroup>
          <Button variant="secondary" onClick={() => setPhysicalTime(15)}>20 Minutes or less</Button>
          <Button variant="secondary" onClick={() => setPhysicalTime(20)}>40 Minutes</Button>
          <Button variant="secondary" onClick={() => setPhysicalTime(25)}>60 Minutes or more</Button>
        </ButtonGroup>
      </Card>
      <Button onClick={()=>setMainScore(creativeTime + physicalTime + funTime + mentalTime)}>Submit</Button>
    </CardGroup>

    <Card
        bg="secondary"
        key="secondary"
        border="primary"
        style={{ width: "18rem", height: "18rem" }}
      >
        <CardHeader>
          {" "}
          <h5 id="mainScoreHeader">Daily Points</h5>{" "}
        </CardHeader>
        <Card body>
          <h2>{mainScore}</h2>
        </Card>

        {/* <Card className="categories">
          <Mental />
          <Creative />
          <Physical />
          <Fun />
        </Card> */}
      </Card>


    </>
  );
}

