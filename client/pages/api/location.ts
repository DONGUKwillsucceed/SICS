import { NextApiRequest, NextApiResponse } from 'next';

const rooms=[
    '거실',
    '안방',
    '화장실',
    '부엌'
]


export default async(req:NextApiRequest, res:NextApiResponse)=>{
    const index = parseInt(`${Math.random()*4}`);
    const room = rooms[index];
    const time = '3';
    res.status(200).json({room,time});
}