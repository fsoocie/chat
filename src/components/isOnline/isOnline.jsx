import React from 'react';
import cn from 'classnames'
import './isOnline.scss'

const IsOnline = ({online}) => {
    return (
        <div className={cn('isOnline', {'isOnline--online': online})}>
            {online? <span>онлайн</span> : <span>офлайн</span>}
        </div>
    );
};

export default IsOnline;