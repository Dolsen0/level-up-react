import { Physical } from './Physical.jsx';
import { Creative } from './Creative.jsx';
import { Fun } from './Fun.jsx';
import { Mental } from './Mental.jsx';




export function Categories(){
    return(
        <>
        <div className='catRow2'>
        <Mental/>
        <Creative/>
        </div>
        <div className='catRow3'>
        <Physical/>
        <Fun/>
        </div>
        </>
    )
}