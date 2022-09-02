import ProgressBar from 'react-bootstrap/ProgressBar'

export default function ProgressMix(){
    return(
        <>
        <ProgressBar>
            <ProgressBar variant='success'now={15} key={1}/>
            <ProgressBar variant='warning'now={20}/>
            <ProgressBar variant='info'now={20}/>
            <ProgressBar variant='danger'now={45}/>
        </ProgressBar>
        </>
    )
}