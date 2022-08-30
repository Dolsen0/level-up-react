import { Physical } from './Physical.jsx';
import { Creative } from './Creative.jsx';
import { Fun } from './Fun.jsx';
import { Mental } from './Mental.jsx';




export function Categories(){
    return(
        <>
        <div className='catRow1'>
        <Mental/>
        <Creative/>
        </div>
        <div className='catRow2'>
        <Physical/>
        <Fun/>
        </div>
        </>
    )
}