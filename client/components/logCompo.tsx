import { FC } from 'react';
import styles from '../styles/location.module.css'
import Logtemp from '../components/logtemplate'

interface log{
    context : string;
    time : string;
}

interface props{
    logs:log[];
}

const container :FC<props> = ({logs})=>{
    return(
        <div className={styles.locationBoard}>
            <div className={styles.header}>
                <h3>로그</h3>
            </div>
            <div className={styles.logCompo}>
                <ul>
                    {
                        logs.map((log)=>{
                            return(
                                <li key={log.time}><Logtemp log={log.context} time={log.time}/></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}


export default container;