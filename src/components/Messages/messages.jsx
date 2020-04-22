import React from 'react';
import Message from "../Message/message";
import './messages.scss'
import cn from 'classnames'
import {Empty, Spin} from "antd";

const Messages = ({items, blockRef, isLoading}) => {
    return (
        <div ref={blockRef} className={cn('messages', {'messages--empty': !items || !items.length || isLoading})}>

            {isLoading ? <Spin tip="Загрузка..." />
                : items === null ? <Empty description='Выберите диалог'/>
                    : items.length ? items.map((item) => <Message {...item} />)
                        : <Empty description='Диалог пуст'/>
            }
        </div>
    );
};

export default Messages;


/*
<Message
    date='Fri Apr 10 2020 18:08:45'
    text='Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол )'
    user={{
        _id: 'v3aa4238a0b923820dcc509a6f75849b',
        avatar: '',
        fullname: 'Пашка Чикнов',
        isOnline: false
    }}
/>
<Message
date='Fri Apr 10 2020 18:08:45'
text='Мы тут недавно войска Ариовиста разбили,dwqdqwffffffffffd wqd wqdq wd qwd qwd qwd wqdqwdqwdqw dw wq dqw dqw wq чуваки хотели закрепиться на галльских землях, лол )'
isMe={true}
isReaded={false}
user={{
    _id: 'q2la4238a0b923820dcc509a6f75849b',
        avatar: 'https://sun9-7.userapi.com/c850236/v850236717/1eb5ac/Myn5dWTfrF0.jpg?ava=1',
        fullname: 'Конор Макгрегор',
        isOnline: false
}}
/>
<Message
    user={{
        _id: 'q2la4238a0b923820dcc509a6f75849b',
        avatar: 'https://sun9-7.userapi.com/c850236/v850236717/1eb5ac/Myn5dWTfrF0.jpg?ava=1',
        fullname: 'Конор Макгрегор',
        isOnline: false
    }}
    date='Fri Apr 10 2020 18:08:45'
    text='лол )'
    isMe={true}
    isReaded={true}
/>
<Message
user={{
    _id: 'q2la4238a0b923820dcc509a6f75849b',
        avatar: 'https://sun9-7.userapi.com/c850236/v850236717/1eb5ac/Myn5dWTfrF0.jpg?ava=1',
        fullname: 'Конор Макгрегор',
        isOnline: false
}}
date='Fri Apr 10 2019 18:08:45'
text='ку'
attachments={[
        {
            fileName: 'image.jgep',
            url: 'https://source.unsplash.com/user/erondu/100x100'
        },
{
    fileName: 'image.jgep',
        url: 'https://source.unsplash.com/user/erondu/100x100'
},
{
    fileName: 'image.jgep',
        url: 'https://source.unsplash.com/user/erondu/100x100'
}
]}
/>
<Message
    user={{
        _id: 'q2la4238a0b923820dcc509a6f75849b',
        avatar: 'https://sun9-7.userapi.com/c850236/v850236717/1eb5ac/Myn5dWTfrF0.jpg?ava=1',
        fullname: 'Конор Макгрегор',
        isOnline: false
    }}
    isWriting={true}
/>

<Message
user={{
    _id: 'q2la4238a0b923820dcc509a6f75849b',
        avatar: 'https://sun9-7.userapi.com/c850236/v850236717/1eb5ac/Myn5dWTfrF0.jpg?ava=1',
        fullname: 'Конор Макгрегор',
        isOnline: false
}}
date='Fri Apr 10 2020 18:08:45'
audio='https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3'
    />*/
