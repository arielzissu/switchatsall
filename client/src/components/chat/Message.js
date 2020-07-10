import React from 'react';

const Message = (props) => {
    const owned = props.ownerUid === props.message.uid;

    const renderMessage = () => {
        switch (props.message.message.type) {
            case 'message':
                return (
                    <p className="messenger-content-list-item-text">
                        {props.message.message.text}
                    </p>
                );
            case 'gif':
                return (
                    <div className="messenger-content-list-item-image">
                        <img src={props.message.message.url} onLoad={props.imgOnLoad} alt=""/>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={owned ? 'messenger-content-list-item messenger-content-list-item__owned' : 'messenger-content-list-item'}>
            {renderMessage()}
        </div>
    )
};

export default Message;