import { NextApiRequest, NextApiResponse } from 'next';

const users=[
    {
        userName : '김복자',
        status : '관심1'
    },
    {
        userName : '김복주',
        status: '관심1'
    },
    {
        userName : '김복치',
        status: '관심1'
    }
]
interface userStatus{
    userName : string;
    status : string;
}


export default async(req : NextApiRequest, res : NextApiResponse)=>{
    const query = req.query.user;
    const user = users.find((user)=> user.userName === query);
    if(!user){
        res.status(404).json({"message" : 'not Found!'});
    }
    else{
        const {userName, status} = user;
        const userStatus : userStatus = {
            userName,
            status
        }
        res.status(200).json(userStatus)
    }
    
}