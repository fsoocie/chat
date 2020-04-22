import React, {useState} from 'react';
import { UploadField } from '@navjobs/upload'
import SmileOutlined from "@ant-design/icons/lib/icons/SmileOutlined";
import PaperClipOutlined from "@ant-design/icons/lib/icons/PaperClipOutlined";
import SendOutlined from "@ant-design/icons/lib/icons/SendOutlined";
import AudioOutlined from "@ant-design/icons/lib/icons/AudioOutlined";
import './textAreaSend.scss'
import Button from "../Button/Button";

const TextAreaSend = ({setIsShowingEmoji,isShowingEmoji}) => {
    const [value, setValue] = useState('')
    return (
        <div className='textarea-send'>
            <Button onClick={() => setIsShowingEmoji(!isShowingEmoji)}type='link' icon={<SmileOutlined style={{fontSize: '22px', margin: '0 8px'}}/>}/>
            <textarea value={value} onChange={e => setValue(e.target.value)} placeholder='Введите текст сообщения...' cols="15" rows="1"></textarea>
            <div className='textarea-send-right'>
                <UploadField
                    onFiles={files => console.log(files)}
                        containerProps={{
                        className: 'resume_import'
                    }}
                        uploadProps={{
                        accept: '.jpeg, .jpg, .png, .gif',
                        multiple: 'true'
                    }}
                        >
                        <Button type='link' icon={<PaperClipOutlined style={{fontSize: '22px'}}/>}/>
                        </UploadField>
                {value ? <Button type='link' icon={<SendOutlined style={{fontSize: '22px', marginLeft: '8px'}}/>}/>
                     : <Button type='link' icon={<AudioOutlined style={{fontSize: '22px', marginLeft: '8px'}}/>}/>}
            </div>
        </div>
    );
};

export default TextAreaSend;