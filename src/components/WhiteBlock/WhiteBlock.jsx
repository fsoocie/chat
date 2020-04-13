import React from 'react';
import './WhiteBlock.scss'

const WhiteBlock = ({children}) => {
    return (
        <div className='white-block'>
            {children}
        </div>
    );
};

export default WhiteBlock;