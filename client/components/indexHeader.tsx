import {FC} from 'react'
import stlyes from '../styles/header.module.css'

interface props{
    status : string;
}

const header : FC<props> = ({status})=>{
    return (
        <header className={stlyes.header}>
            <div className={stlyes.logo}>
                <h1>
                    S I C S
                </h1>
            </div>
            <div className={stlyes.dashboard}>
                <div className={stlyes.status}>
                    <p className={stlyes.lable}>현재 상태</p>
                    <p>{status}</p>
                </div>

                <nav className={stlyes.headNav}>
                    <ul>
                        <li className={stlyes.userName}>김동욱</li>
                        <li className={stlyes.admin}>관리자</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

header.defaultProps={
    status : '정상',
}

export default header