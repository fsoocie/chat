import React, {useState} from 'react';
import orderBy from "lodash/orderBy"
import './Dialogs.scss'
import DialogItem from "../DialogItem/DialogItem";
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import {Empty, Input, Spin} from "antd";
import cn from 'classnames'

const Dialogs = ({items, userId, onSelect, isLoading}) => {
    const [querySearch, setQuerySearch] = useState('');
    const sortedItems = [...items.filter((item) => item.user.fullname.toLowerCase().indexOf(querySearch.toLowerCase()) >= 0)];
    sortedItems.forEach(item => item.created_at = new Date(item.created_at));
    return (
        <div className='dialogs'>
            <div className='dialogs__search'>
                <Input
                    placeholder="Поиск среди контактов"
                    prefix={<SearchOutlined/>}
                    size="large"
                    value={querySearch}
                    onChange={(e) => setQuerySearch(e.target.value)}
                />
            </div>
            <div className={cn('dialogs__items', {'dialogs__items--loading': isLoading})}>
                {isLoading? <Spin tip="Загрузка..." />
                    :sortedItems.length ? (
                    orderBy(sortedItems, ["created_at"], ["desc"]).map(item => (
                        <DialogItem key={item._id} onSelect={onSelect} isMe={item.user._id === userId} {...item} />
                    ))
                ): <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
            </div>
        </div>
    );
};

export default Dialogs;