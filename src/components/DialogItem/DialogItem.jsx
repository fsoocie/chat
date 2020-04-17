import React from 'react';
import cn from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import IconRead from "../IconReaded/IconReaded";
import ImageAvatar from "../ImageAvatar/ImageAvatar";

const formatDate = (date) => {
    return(
    isToday(new Date(date))
        ? format(new Date(date), 'HH:mm')
        :format(new Date(date), 'dd.MM.yyyy'))
}

const DialogItem = ({user, isMe, unread,created_at, text}) => {
    const temp = 10
    return (
        <div className={cn('dialogs__item', {'dialogs__item--isOnline': user.isOnline})}>
           <div className="dialogs__image">
               <ImageAvatar user={user}/>
           </div>
           <div className="dialogs__content">
               <div className="dialogs__top">
                   <b>{user.fullname}</b>
                   <span>{formatDate(created_at)}</span>
               </div>
               <div className="dialogs__bottom">
                    <p>{text}</p>
                   {temp > 0 && <div className="dialogs__unread-count">
                        <span>{temp > 9? '+9' : temp}</span>
                    </div>}
                   {isMe && <IconRead isMe = {true} isRead = {true} />}
               </div>
           </div>
        </div>
    );
};

export default DialogItem;