import React from 'react';

import Dialogs from "../../components/Dialogs/Dialogs";
import dialogsJSON from '../../dialogs'
import Button from "../../components/Button/Button";
import FormOutlined from "@ant-design/icons/lib/icons/FormOutlined";
import TeamOutlined from "@ant-design/icons/lib/icons/TeamOutlined";
import Messages from "../../components/Messages/messages";
import IsOnline from "../../components/isOnline/isOnline";
import EllipsisOutlined from "@ant-design/icons/lib/icons/EllipsisOutlined";
import TextAreaSend from "../../components/TextAreaSend/textAreaSend";


const Home = (props) => {
    return (
        <div className='chat'>
            <div className="chat__sidebar">
                <div className="chat__sidebar-header">
                    <div className='chat__sidebar-header-group'>
                        <TeamOutlined style={{fontSize: '20px'}}/>
                        <span className='chat__sidebar-header-group-span'>Список диалогов</span>
                    </div>

                </div>
                <div className="chat__sidebar-dialogsList">
                    <Dialogs items={dialogsJSON} userId={0}/>
                </div>
            </div>


            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <div/>
                    <div className="chat__dialog-header-body">
                        <b>Иван Алексеев</b>
                        <IsOnline online={true}/>
                    </div>
                    <Button type='link' icon={<EllipsisOutlined style={{fontSize:'22px'}} />}/>
                </div>
                <div className="chat__dialog-messages">
                    <div className="chat__dialog-messages-items">
                        <Messages />
                    </div>
                    <div className="chat__dialog-messages-items-textarea">
                        <TextAreaSend />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;


{/*<Message
                date='Fri Apr 10 2020 18:08:45'
                text='Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол )'
                user={{
                    _id: 'v3aa4238a0b923820dcc509a6f75849b',
                    image: '',
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
                    image: 'https://sun9-7.userapi.com/c850236/v850236717/1eb5ac/Myn5dWTfrF0.jpg?ava=1',
                    fullname: 'Конор Макгрегор',
                    isOnline: false
                }}
            />*/
}
{/*<Message
                image='https://sun9-7.userapi.com/c850236/v850236717/1eb5ac/Myn5dWTfrF0.jpg?ava=1'
                date='Fri Apr 10 2020 18:08:45'
                text='лол )'
                isMe={true}
                isReaded={true}
            />
            <Message
                image='https://sun7-7.userapi.com/p0bNKrpD9gb6784zcw7tXFMqHkhjChEdDJ36eg/O-HCMGPd5Ck.jpg?ava=1'
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
                image='https://sun7-7.userapi.com/p0bNKrpD9gb6784zcw7tXFMqHkhjChEdDJ36eg/O-HCMGPd5Ck.jpg?ava=1'
                isWriting={true}
            />

            <Message
                image='https://sun7-7.userapi.com/p0bNKrpD9gb6784zcw7tXFMqHkhjChEdDJ36eg/O-HCMGPd5Ck.jpg?ava=1'
                date='Fri Apr 10 2020 18:08:45'
                audio='https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3'
            />*/
}