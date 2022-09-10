import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import AddScore from "./AddScore.jsx";

export default function MainScore() {
  const [mainScore, setMainScore] = useState(0);
  const [dailyScore, setDailyScore] = useState(0);
  const [creativeTime, setCreativeTime] = useState(0);
  const [funTime, setFunTime] = useState(0);
  const [physicalTime, setPhysicalTime] = useState(0);
  const [mentalTime, setMentalTime] = useState(0);

  useEffect(() => {
    // fetch("http://localhost:5785/user/15d9vJM7UV04Nh2vY2Lx")
      fetch("https://level-up-do.web.app/user/15d9vJM7UV04Nh2vY2Lx")
      .then((results) => results.json())
      .then((data) => {
        console.log({ score: data.score });
        setMainScore(data.score);
      })
      .catch((err) => console.error(err));
  }, [setMainScore]);

  return (
    <>
      <div className="mainDisplay">
      <div className="scoreboard">
        <ButtonGroup>
          <Card
            bg="primary"
            key="secondary"
            border="primary"
            style={{ width: "18rem", height: "16rem" }}
          >
            <CardHeader>
              {" "}
              <h5 id="mainScoreHeader">Daily Points</h5>{" "}
            </CardHeader>
            <Card body>
              <h2>{mainScore}</h2>
            </Card>
            <Card.Footer>

            <ButtonGroup>

        <Button
          onClick={async (e) =>
            ( await setDailyScore(
              creativeTime + physicalTime + funTime + mentalTime
              ))
            }
            >
          Add Points
        </Button>
        <AddScore dailyScore={dailyScore} setMainScore={setMainScore} />
          </ButtonGroup>

            </Card.Footer>
          </Card>
        </ButtonGroup>
      </div>

      <div className="categories">
  
        <Card id="creative" bg="warning" text="white">
          <Card.Header as="h6">Creative</Card.Header>
          <Card.Body variant="outline-primary">
          {`${creativeTime} points earned`}
          </Card.Body>
          <ButtonGroup>
            <Button variant="warning" onClick={() => setCreativeTime(15)}>
              20 Minutes or less
            </Button>
            <Button variant="warning" onClick={() => setCreativeTime(20)}>
              40 Minutes
            </Button>
            <Button variant="warning" onClick={() => setCreativeTime(25)}>
              60 Minutes or more
            </Button>
          </ButtonGroup>
        </Card>

        <Card id="fun" bg="info" text="white">
          <Card.Header as="h6">Fun</Card.Header>
          <Card.Body >{`${funTime} points earned`}</Card.Body>
          {/* <Card.Footer>  */}
          <ButtonGroup>
            <Button variant="info" onClick={() => setFunTime(15)}>
              20 Minutes or less
            </Button>
            <Button variant="info" onClick={() => setFunTime(20)}>
              40 Minutes
            </Button>
            <Button variant="info" onClick={() => setFunTime(25)}>
              60 Minutes or more
            </Button>
          </ButtonGroup>
          {/* </Card.Footer> */}
        </Card>

        <Card id="mental" bg="secondary" text="white">
          <Card.Header as="h6">Mental</Card.Header>
          <Card.Body bg="secondary" >
          {`${mentalTime} points earned`}
          </Card.Body>
          <ButtonGroup>
            <Button variant="secondary" onClick={() => setMentalTime(15)}>
              20 Minutes or less
            </Button>
            <Button variant="secondary" onClick={() => setMentalTime(20)}>
              40 Minutes
            </Button>
            <Button variant="secondary" onClick={() => setMentalTime(25)}>
              60 Minutes or more
            </Button>
          </ButtonGroup>
        </Card>

        <Card id="physical" bg="primary" text="white" onClick={() => {}}>
          <Card.Header as="h6">Physical</Card.Header>
          <Card.Body >{`${physicalTime} points earned`}</Card.Body>
          <ButtonGroup>
            <Button variant="primary" onClick={() => setPhysicalTime(15)}>
              20 Minutes or less
            </Button>
            <Button variant="primary" onClick={() => setPhysicalTime(20)}>
              40 Minutes
            </Button>
            <Button variant="primary" onClick={() => setPhysicalTime(25)}>
              60 Minutes or more
            </Button>
          </ButtonGroup>
        </Card>
        </div>
        </div>
   


        
    </>
  );
}
