import { Button } from "react-bootstrap";

export default function AddScore({ dailyScore, setMainScore }){
    const addScore = () => {
        fetch("https://level-up-do.web.app/user/15d9vJM7UV04Nh2vY2Lx", {
            method: 'PATCH',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ score: dailyScore })
        })
            .then(results => results.json())
            .then(data=>{
                setMainScore(data.score);
            })
            .catch(err => console.error(err))
        }

    return(
        <div className="newScore">
            <Button onClick={addScore}
            >

                Submit Points
            </Button>
        </div>
    )
}