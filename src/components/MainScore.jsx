import { useEffect, useState } from "react"
import  Card  from "react-bootstrap/Card"
import CardHeader from "react-bootstrap/esm/CardHeader"

export default function MainScore({userScore}){

    const[mainScore, setMainScore] = useState(0)

    useEffect(() => {
        fetch('https://level-up-do.web.app/user')
        // fetch('http://localhost:5785')
        .then(results => results.json())
        .then(results => setMainScore(results.score))
        .catch(err => console.error(err))
        
    }, [])

    return(
        <Card bg= "secondary" key = "secondary" border="primary" style={{ width: '18rem'}}>
            <CardHeader> <h5>Daily Points</h5>  </CardHeader>
            <Card body>
                <h2>{mainScore}</h2>
            </Card>
        </Card>
    ) 
}








