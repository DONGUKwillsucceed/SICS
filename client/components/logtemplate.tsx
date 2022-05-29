import { FC } from 'react';
import styles from '../styles/logtemplate.module.css'

interface props{
    log : string;
    time : string;
}

const container : FC<props> = ({log, time})=>{
    return(
        <div className={styles.container}>
            <div className={styles.log}>
                <p>{log}</p>
            </div>
            <div className={styles.timeline}>
                <p>{time}</p>
            </div>
        </div>
    )
}

container.defaultProps={
    log : '화장실에 들어가셨습니다.',
    time : '2020-04-20'
}

export default container;