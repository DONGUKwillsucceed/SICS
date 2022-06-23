import { FC, useState } from 'react';
import styles from '../styles/location.module.css'

interface props{
    room : string;
    time : string;
}

const container : FC<props> = ({room, time})=>{
    let islivingRoom = false;
    let isMainRoom = false;
    let isBathRoom = false;
    let isKitchen = false;

    if(room === '거실'){
        islivingRoom = true;
    }
    if(room === '안방'){
        isMainRoom = true;
    }
    if(room === '화장실'){
        isBathRoom = true;
    }
    if(room === '부엌'){
        isKitchen = true;
    }
    if(room === "none"){
        islivingRoom = false;
        isMainRoom = false;
        isBathRoom = false;
        isKitchen = false;
    }

    return(
        <div className={styles.locationBoard}>
            <div className={styles.header}>
                <h3>현위치</h3>
            </div>
            <div className={styles.houseContainer}>
                <div className={styles.house}>
                    <div className={styles.upperPart}>
                        <div className={islivingRoom ? styles.coloredLivingRoom : styles.livingRoom}>
                            <p>거실</p>
                        </div>
                        <div className={isMainRoom ? styles.coloredMainRoom : styles.mainRoom}>
                            <p>안방</p>
                        </div>
                    </div>
                    <div className={styles.bottomPart}>
                        <div className={isBathRoom ? styles.coloredBathRoom :styles.bathRoom}>
                            <p>화장실</p>
                        </div>
                        <div className={isKitchen ? styles.coloredKitchen :styles.kitchen}>
                            <p>부엌</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className={styles.log}>
                {
                    room === 'none' ? <p>집밖으로 나갔습니다.</p> :<p>{room}에서 {time}분간 이동하지 않고 있습니다.</p>
                }
            </div>
        </div>
    )
}


container.defaultProps = {
    room : "화장실",
    time : "7"
}

export default container;