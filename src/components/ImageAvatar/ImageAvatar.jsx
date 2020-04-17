import React from 'react';
import generateColors from '../../utils/helpers/generateColors'
import './ImageAvatar.scss'

const ImageAvatar = ({user}) => {
    if (user.avatar) {
       return (
           <img src={user.avatar}
                alt={`ava ${user.fullname}`}
                className='avatar'
           />
       )
    } else {
        const {color, lightColor} = generateColors(user._id);
        const firstLetter = user.fullname[0].toUpperCase();
        return (
            <div className='avatar avatar__empty' style={{background: `linear-gradient(135deg, ${color} 0%, ${lightColor} 96.52%`}}>
                {firstLetter}
            </div>
        )
    }

};

export default ImageAvatar;