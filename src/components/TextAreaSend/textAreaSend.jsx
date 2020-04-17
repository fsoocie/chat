import React, {useState} from 'react';
import SmileOutlined from "@ant-design/icons/lib/icons/SmileOutlined";
import {Input} from "antd";
import PaperClipOutlined from "@ant-design/icons/lib/icons/PaperClipOutlined";
import SendOutlined from "@ant-design/icons/lib/icons/SendOutlined";
import AudioOutlined from "@ant-design/icons/lib/icons/AudioOutlined";
import './textAreaSend.scss'
import Button from "../Button/Button";

const TextAreaSend = () => {
    const [empty, setEmpty] = useState(true)
    return (
        <div className='textarea-send'>
            <Button type='link' icon={<SmileOutlined style={{fontSize: '22px', margin: '0 8px'}}/>}/>
            <textarea placeholder='Введите текст сообщения...' cols="15" rows="1"></textarea>
            <div className='textarea-send-right'>
                <Button type='link' icon={<PaperClipOutlined style={{fontSize: '22px'}}/>}/>
                {empty ? <Button type='link' icon={<AudioOutlined style={{fontSize: '22px', marginLeft: '8px'}}/>}/>
                     : <Button type='link' icon={<SendOutlined style={{fontSize: '22px', marginLeft: '8px'}}/>}/>}
            </div>
        </div>
    );
};

export default TextAreaSend;