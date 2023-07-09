import classNames from 'classnames';
import { useEffect, useState } from 'react';
import css from './ProgressBar.module.less';

const ProgressBar = ({page, length}) => {
    const [width, setWidth] = useState(0);
    const arr = [];

    for (let i = 0; i < length; i++) {
        arr.push(
            <div style={{position:"relative"}}>
                <div key={i} className={classNames(css.circle, i <= page ? css.active: null)}/>
                <div style={{color: "black", fontSize:"25px", position:"absolute"}}>기본 정보</div>
            </div>

        );
    };

    useEffect(() => {
        setWidth((100/(length-1))*page)
    }, [page])

    return (
        <div className={css.container}>
            <div className={css.progressBar}>
                <div className={css.progress} style={{width: width+"%"}}/>
                {arr}
            </div>
        </div>

    )

}


export default ProgressBar