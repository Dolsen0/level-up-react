import { useEffect, useState } from "react"
import  Card  from "react-bootstrap/Card"

export default function MainScore({userScore, setUserScore}){

    const[mainScore, setMainScore] = useState(0)

    useEffect(() => {
        fetch('https://level-up-do.web.app/')
        .then(results => results.json())
        .then(score => setUserScore(score))
        .catch(err => console.error(err))
        
    }, [setUserScore])

    if(!userScore){
        return(
            <Card bg= "secondary" key = "secondary" border="primary" style={{ width: '18rem'}}>
                <Card body>
                    <h2>{mainScore}</h2>
                </Card>
            </Card>
        ) 
    }
    return(
        <Card border="secondary" style={{ width: '18rem'}}>
        <Card body>
        <ul>
            {userScore.map(score => (
                <li key={score.id}>{score.score}</li>
                ))}
        </ul>
        </Card>
        </Card>
    )
}