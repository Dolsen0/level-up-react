import { useState } from "react";
import { Button } from "react-bootstrap";

export default function AddScore(){
    const[score, setScore] = useState('')
    const addScore = () => {
         // fetch("localhost:5785/user")
    fetch("https://level-up-do.web.app/user", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({score, done:false})
    })
        .then(results => results.json())
        .then(data=>{
            setScore(data);
        })
        .catch(err => console.error(err))
    }

    return(
        <div className="newScore">
            <Button onClick={e => setScore(e.target.value) + console.log({score})}
            // enterButton="Add"
            // size="large"
            // e => setScore(e.target.value)
            >

                Submit Daily Score
            </Button>
        </div>
    )
}