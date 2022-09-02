import { useEffect, useState } from "react"
import  Card  from "react-bootstrap/Card"


export default function MainScore({userScore}){

    const[mainScore, setMainScore] = useState(5)

    useEffect(() => {
        fetch('https://level-up-do.web.app/user')
        // fetch('http://localhost:5785')
        .then(results => results.json())
        .then(score => setMainScore(mainScore))
        .catch(err => console.error(err))
        
    }, [])

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