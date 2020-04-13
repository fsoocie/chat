import React from 'react';
import * as PropTypes from "prop-types";
import {ru} from 'date-fns/locale'
import {formatDistanceToNow} from 'date-fns'
import cn from 'classnames'

import readed from '../../assets/readed.svg'
import unreaded from '../../assets/unreaded.svg'
import './message.scss'


const Message = ({text, image, date, user, isMe, isReaded, attachments}) => {
    return (
        <div className={cn('message', {'message__isMe': isMe})}>
            <div className="message__image">
                <img src={image} alt={`${user.fullname}__photo`}/>
            </div>
            <div className="message__content">
                <div className="message__bubble">
                    <p>{text}</p>
                </div>
                {attachments && <div className='message__attachments'>
                    {attachments.map((at) => <div className='message__attachment-item'>
                        <img src={at.url} alt={at.fileName}/>
                        </div>
                    )}
                </div>}
                <div className="message__date">
                    <span>{formatDistanceToNow(new Date(date), {addSuffix: true, locale: ru})}</span>
                </div>
            </div>
            {isMe && <div className="message__checked">
                <img src={isReaded ? readed : unreaded} alt="checked user.fullname"/>
            </div>}
        </div>
    );
};


Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object
}


export default Message;