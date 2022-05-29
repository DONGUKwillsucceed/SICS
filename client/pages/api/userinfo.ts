import { NextApiRequest, NextApiResponse } from 'next';

const users=[
    {
        userName : '김복자',
        address : '서울시 광진구 화양리',
        contact : '010-1234-5678',
        infomation : '5시 기상, 22시 취침, 끼니를 거르지 않음, 하루에 한번 샤위, 무연고'
    },
    {
        userName : '김복주',
        address : '서울시 광진구 화양리',
        contact : '010-1234-5678',
        infomation : '5시 기상, 22시 취침, 끼니를 거르지 않음, 하루에 한번 샤위, 무연고'
    },
    {
        userName : '김복치',
        address : '서울시 광진구 화양리',
        contact : '010-1234-5678',
        infomation : '5시 기상, 22시 취침, 끼니를 거르지 않음, 하루에 한번 샤위, 무연고'
    }
]


export default async(req : NextApiRequest, res : NextApiResponse)=>{
    res.status(200).json({users});
}