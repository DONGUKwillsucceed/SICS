import Image from 'next/image';
import { FC } from 'react';
import styles from '../styles/infoCompo.module.css'
import noneicon from '../public/noneicon.png'

interface props{
    userName : string;
    address : string;
    contact : string;
    infomation : string[];
    setUserList : any;
}


const infoCompo : FC<props> = ({userName, address, contact, infomation, setUserList})=>{
    const listinfo = infomation.map((info)=>{
        return(
            <li key={info}>{info}</li>
        )
    });

    function otherBtn(){
        setUserList(true);
    }

    return(
        <div className={styles.mainContainer}>
            <div>
                <div className={styles.image}>
                    <Image src={noneicon} width='150px' height='150px'/>
                </div>
                <div className={styles.userInfo}>
                    <ul>
                        <li>
                            <div className={styles.unContainer}>
                                <p className={styles.userName}>{userName}</p>
                                <p>할머니</p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.liContainer}>
                                <p className={styles.liName}>장소</p>
                                <p>{address}</p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.liContainer}>
                                <p className={styles.liName}>연락처</p>
                                <p>{contact}</p>
                            </div>
                        </li>
                        <li>
                        <div className={styles.liContainer} id={styles.infomation}>
                                <p className={styles.liName}>특이사항</p>
                                <ul className={styles.infolist}>
                                    {listinfo}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.othersBtn} onClick={otherBtn}>
                <p>Others</p>
            </div>
        </div>
    )
}

infoCompo.defaultProps = {
    userName : "김복자",
    address : "서울특별시 광진구 화양리",
    contact : "010-1234-5678",
    infomation : ["5시 기상", "22시 취침", "끼니를 거르지 않음", "하루에 한번 샤워, 무연고", "생필품 구매 목적으로 외출"],
}

export default infoCompo;