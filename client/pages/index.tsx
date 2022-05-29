import type { GetServerSideProps, NextPage } from 'next'
import Header from '../components/indexHeader'
import RightCompo from '../components/infoCompo'
import LocationBoard from '../components/location'
import LogBoard from '../components/logCompo'
import Others from '../components/others'
import {io} from 'socket.io-client'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

interface log{
  context : string;
  time : string;
}

interface userInfo{
  userName : string;
  address : string;
  contact : string;
  infomation : string[];
}

interface DataPacket{
  status : string;
  userName : string;
  contact : string;
  address : string;
  infomation : string[];
  room : string;
  time : string;
  logs : log[];
  users : userInfo[];
}

export const getServerSideProps : GetServerSideProps = async()=>{
  const resAboutUserInfo = await fetch('http://localhost:3000/api/userinfo/김복자');
  const resAboutUserList = await fetch('http://localhost:3000/api/userinfo');
  const resAboutLocation = await fetch('http://localhost:8080/location');
  const resAboutLogs = await fetch('http://localhost:8080/logs');
  const resAboutstatus = await fetch('http://localhost:3000/api/status/김복자');
  const {userName, address, contact, infomation} = await resAboutUserInfo.json();
  const {users} = await resAboutUserList.json();
  const {room, time} = await resAboutLocation.json();
  const logs = await resAboutLogs.json();
  console.log(logs);
  const {status} = await resAboutstatus.json();
  return {
    props:{
      userName,
      address,
      contact,
      infomation,
      room,
      time,
      logs,
      users,
      status
    }
  }
}

const socket = io("http://localhost:8080")

const Home: NextPage<DataPacket> = (props) => {

  useEffect(()=>{
    socket.on('log-msg', (data)=>{
      socket.emit('log-msg', data);
    })
  })
  const [userList, setUserList] = useState(false);
  return (
    <div>
      <Header status={props.status}/>
      <main className={styles.mainContainer}>
        {userList ? <Others setUserList={setUserList} users={props.users}/> : <RightCompo userName={props.userName} address={props.address} contact={props.contact} infomation={props.infomation} setUserList={setUserList}/>}
        <div className={styles.statusContainer}>
          <div className={styles.selectContainer}>
            <LocationBoard room={props.room} time={props.time}/>
          </div>
          <div className={styles.noneSelectContainer}>
            <LogBoard logs={props.logs}/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
