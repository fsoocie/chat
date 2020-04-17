import React from 'react';
import read from '../../assets/readed.svg'
import unread from '../../assets/unreaded.svg'


const IconRead = ({isRead, isMe}) => {

    return(
        isMe && isRead ? <div className='icon-read'><img src={read} alt='read'/></div>
            : <div className='icon-read icon-unread'><img src={unread} alt='unread'/></div> || null
    )
};

export default IconRead;

/*
isRead ? (<div className='icon-read'>
        <img src={read} alt='read'/></div>)
    :(<div className='icon-unread'>
        <img src={unread} alt='unread'/>
    </div>} || null*/
