import React, {useState, useRef, useEffect} from 'react';
import * as PropTypes from "prop-types";
import {ru} from 'date-fns/locale'
import {formatDistanceToNow} from 'date-fns'
import cn from 'classnames'

import convertCurrentTime from "../../utils/helpers/convertCurrentTime";
import readed from '../../assets/readed.svg'
import unreaded from '../../assets/unreaded.svg'
import './message.scss'
import wave from '../../assets/wave.svg'
import play from '../../assets/play.svg'
import pause from '../../assets/pause.svg'
import ImageAvatar from "../ImageAvatar/ImageAvatar";


const AudioFile = ({audioSrc}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0)
    const audioElem = useRef(null);

    useEffect(() =>{
        audioElem.current.volume = 0.01;
        audioElem.current.addEventListener('playing', () => setIsPlaying(true));
        audioElem.current.addEventListener('pause', () => setIsPlaying(false));
        audioElem.current.addEventListener('ended', () =>{
            setIsPlaying(false);
            setCurrentTime(0);
            setTimeout(() => setProgress(0), 300);
        });
        audioElem.current.addEventListener('timeupdate', () =>{
                setCurrentTime(audioElem.current.currentTime)
                setProgress((audioElem.current.currentTime/audioElem.current.duration) * 100)
        })
    }, []);

    const togglePlay = () =>{
        if (!isPlaying){
            audioElem.current.play()
        } else audioElem.current.pause()
    }

    return (
        <div className='message__audio'>
            <audio ref={audioElem} src={audioSrc} preload='auto' ></audio>
            <div className="message__audio-progress" style={{width:`${progress}%`}} />
            <div className="message__audio-content">
                <div className="message__audio-button">
                    <button onClick={togglePlay}>
                        <img src={isPlaying? pause : play} alt="play/pause"/>
                    </button>
                </div>
                <div className="message__audio-wave">
                    <img src={wave} alt="audio-wave"/>
                </div>
                <div className="message__audio-duration">
                    <span>{convertCurrentTime(currentTime)}</span>
                </div>
            </div>
        </div>
    )
};


const Message = ({text, image, date, user, isMe, isReaded, attachments, isWriting, audio}) => {
    return (
        <div className={cn(
            'message',
            {'message--isMe': isMe},
            {'message--isWriting': isWriting},
            {'message--isAudio': audio},
        )}>
            <div className="message__image">
                    <div className='message__image-wrapper'>
                        <ImageAvatar user={user} />
                    </div>
            </div>
            <div className="message__content">

                {(text || isWriting || audio) &&
                <div className="message__bubble">
                    {text && <p>{text}</p>}
                    {isWriting &&
                    <div className="message__typing">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>}
                    {audio && <AudioFile audioSrc={audio}/>}
                </div>}
                {attachments && <div className='message__attachments'>
                    {attachments.map((at) => <div className='message__attachment-item'>
                            <img src={at.url} alt={at.fileName}/>
                        </div>
                    )}
                </div>}
                <div className="message__date">
                    {date && <span>{formatDistanceToNow(new Date(date), {addSuffix: true, locale: ru})}</span>}
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