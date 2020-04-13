import React from 'react';

import Message from "../../components/Message/message";

const Home = (props) => {
    return (
        <div>
            <Message
                image='https://sun9-7.userapi.com/c850236/v850236717/1eb5ac/Myn5dWTfrF0.jpg?ava=1'
                date='Fri Apr 10 2020 18:08:45'
                text='Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол )'

            />
            <Message
                image='https://sun9-7.userapi.com/c850236/v850236717/1eb5ac/Myn5dWTfrF0.jpg?ava=1'
                date='Fri Apr 10 2020 18:08:45'
                text='Мы тут недавно войска Ариовиста разбили,dwqdqwffffffffffd wqd wqdq wd qwd qwd qwd wqdqwdqwdqw dw wq dqw dqw wq чуваки хотели закрепиться на галльских землях, лол )'
                isMe={true}
                isReaded={false}
            />
            <Message
                image='https://sun9-7.userapi.com/c850236/v850236717/1eb5ac/Myn5dWTfrF0.jpg?ava=1'
                date='Fri Apr 10 2020 18:08:45'
                text='лол )'
                isMe={true}
                isReaded={true}
            />
            <Message
                image='https://sun9-7.userapi.com/c850236/v850236717/1eb5ac/Myn5dWTfrF0.jpg?ava=1'
                date='Fri Apr 10 2019 18:08:45'
                text='лол )'
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
        </div>
    );
};

export default Home;