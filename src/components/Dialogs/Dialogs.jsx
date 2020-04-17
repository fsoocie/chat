import React from 'react';
import orderBy from "lodash/orderBy"
import './Dialogs.scss'
import DialogItem from "../DialogItem/DialogItem";
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import {Input} from "antd";

const Dialogs = ({items, userId}) => {
    items.forEach(item => item.created_at = new Date(item.created_at));
    return (
        <div className='dialogs'>
            <div className='dialogs__search'>
                <Input
                    placeholder="Поиск среди контактов"
                    prefix={<SearchOutlined/>}
                    size="large"
                />
            </div>
            <div className="dialogs__items">
            {items.length && (
                orderBy(items, ["created_at"], ["desc"]).map(item => (
                    <DialogItem key={item._id} isMe={item.user._id === userId} {...item} />
                ))
            )}
            </div>
        </div>
    );
};

export default Dialogs;