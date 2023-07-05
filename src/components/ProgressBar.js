import { useEffect, useState } from 'react';
import './ProgressBar.scss';

const ProgressBar = () => {
    const [circle] = useState(4);
    const [active, setActive] = useState(0);
    const [width, setWidth] = useState(0);
    const arr = [];

    for (let i = 0; i < circle; i++) {
        arr.push(
            <div key={i} className={i <= active ? 'circle active': 'circle'}/>
        );
    };

    useEffect(() => {
        setWidth((100/(circle-1))*active)
    }, [active])

    return (
        <div className='container'>
            <div className='progressBar'>
                <div className='progress' style={{width: width+"%"}}/>
                {arr}
            </div>

            <div className='button'>
                <button className='prevBtn' onClick={() => {active > 0 && setActive(active - 1)}}>prev</button>
                <button className='nextBtn' onClick={() => {active < 4 && setActive(active + 1)}}>next</button>
            </div>     
        </div>

    )

}


export default ProgressBar