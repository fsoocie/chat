import React from 'react';
import cn from 'classnames'
import PropTypes from 'react'
import './Button.scss'
import { Button as BaseButton } from 'antd'


const Button = props => {
    return (
            <BaseButton {...props} className={cn('button',props.className,{'button--large': props.size === 'large'})}/>
    );
};

Button.propTypes = {
    className: PropTypes.string
};

export default Button;

