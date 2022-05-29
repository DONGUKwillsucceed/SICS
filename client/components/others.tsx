import { GetServerSideProps } from 'next';
import { FC, useEffect, useState } from 'react';
import styles from '../styles/others.module.css'

interface props{
    setUserList :any;
    users : userInfo[];
}

interface userInfo{
    userName : string;
    address : string;
    contact : string;
    infomation : string[];
}



const container : FC<props> = ({setUserList, users})=>{

    function getUserInfo(){
        setUserList(false);
    }

    return(
        <div className={styles.mainContainer}>
            <ul>
                {
                    users.map((user:userInfo)=>{
                        return(
                            <li onClick={getUserInfo}>
                                <div className={styles.userInfo}>
                                    <p className={styles.liName}>{user.userName}</p>
                                    <p>{user.contact}</p>
                                </div>
                                <p>정상</p>
                            </li>
                        );
                    })
                }
            </ul>

        </div>
    )
}

export default container;