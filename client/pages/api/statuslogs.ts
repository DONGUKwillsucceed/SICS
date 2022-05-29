import { NextApiRequest, NextApiResponse } from 'next';

const logs=[
    {
        context:"할머니 가방에 들어가신다.",
        time:"2020-12-21 11:12:21"
    },
    {
        context:"할머니 가방에 들어가신다.",
        time:"2020-12-21 11:12:23"
    },
    {
        context:"할머니 가방에 들어가신다.",
        time:"2020-12-21 11:12:22"
    }
]

function setTime(){
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth()+1)).slice(-2);
    const date = ('0' + today.getMonth()).slice(-2);
    const hour = ('0' + today.getHours()).slice(-2);
    const minute = ('0' + today.getHours()).slice(-2);
    const second = ('0' + today.getHours()).slice(-2);
    const time = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    return time
}

export default async(req : NextApiRequest, res:NextApiResponse) => {
    res.status(200).json({logs});
}