import React, {useEffect, useRef} from 'react';
import BaseMessages from '../components/Messages/messages'
import {connect} from "react-redux";
import {fetchMessages} from "../redux/actions/messages";

const Messages = ({items,currentDialogId,fetchMessages, isLoading}) => {
    const messagesEl = useRef(null)
    useEffect(() => {
        if (currentDialogId){
            fetchMessages(currentDialogId)
        }
    }, [currentDialogId])

    useEffect(() => {
        if (messagesEl.current){
            messagesEl.current.scrollTo(0, 9999)
        }
    }, [items,isLoading])
    return (
        <BaseMessages blockRef={messagesEl} items={items} isLoading={isLoading} />
    );
};

const mapStateToProps = ({messages,dialogs}) => ({
   isLoading: messages.isLoading,
   items: messages.items,
   currentDialogId: dialogs.currentDialogId
});

export default connect(mapStateToProps, {fetchMessages})(Messages);