import React, {useEffect} from 'react';
import BaseDialogs from '../components/Dialogs/Dialogs'
import {fetchDialogs, setCurrentDialogId} from "../redux/actions/dialogs";
import {connect} from "react-redux";

const Dialogs = ({items, userId, fetchDialogs, setCurrentDialogId, isLoading}) => {

    const onSelect = (dialogId) =>{
        setCurrentDialogId(dialogId)
    }
    useEffect(() =>{
        fetchDialogs()
    },[])
    return (
        <BaseDialogs items={items} userId={userId} isLoading={isLoading} onSelect={onSelect}/>
    );
};

const mapStateToProps = ({dialogs}) => ({
    items: dialogs.items,
    currentDialogId: dialogs.currentDialogId,
    isLoading: dialogs.isLoading,
});

export default connect(mapStateToProps, {fetchDialogs, setCurrentDialogId})(Dialogs);