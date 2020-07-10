import React from 'react';
import { store as notifications } from 'react-notifications-component';

import EmojiBox from './EmojiBox';

class ChatBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message : '',
            isEmojiOpened: false,
            isTyping: false
        };

        this.typingTimeout = null;
        this.emojiButtonRef = React.createRef();
    }

    onChange = (e) => {
        this.setState({
            message : e.target.value
        })
    }

    onKeyUp = (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            this.setState({
                isTyping: false
            }, () => {
                this.props.sendTypingStatus(false);
            });
        } else {
            if (this.state.isTyping === false) {
                this.setState({
                    isTyping: true
                }, () => {
                    this.props.sendTypingStatus(true);
                    this.typingTimeout = setTimeout(this.typingTimeoutFunc, 2000);
                });
            } else {
                clearTimeout(this.typingTimeout);
                this.typingTimeout = setTimeout(this.typingTimeoutFunc, 2000);
            }
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.message.length > 0) {
            this.props.sendMessage({
                type : 'message',
                text : this.state.message
            });
            this.setState({message : ''});
        } else {
            notifications.addNotification({
                message: 'אנא הכנס הודעה',
                type: 'danger',
                insert: 'top',
                container: 'top-center',
                dismiss: {
                  duration: 3000
                }
            });
        }
    }

    openEmojiMenu = e => {
        this.setState({
            isEmojiOpened: true
        });
    };

    closeEmojiMenu = () => {
        this.setState({
            isEmojiOpened: false
        });
    };

    typingTimeoutFunc = () => {
        this.setState({
            isTyping: false
        }, () => {
            this.props.sendTypingStatus(false);
        });
    };

    render() {
        return (
            <>
                <div className="messenger-content-input">
                    <form onSubmit={this.onSubmit}>
                        <input
                            placeholder="הקלד כאן..."
                            value={this.state.message}
                            onChange={this.onChange}
                            onKeyUp={this.onKeyUp}
                            onFocus={this.onFocus}
                            type="text"
                            required
                        />

                        <button
                            className="button button__primary messenger-content-input-button__send"
                            type="submit"
                        >
                            <i className="icon icon-chevron__left"></i>
                        </button>

                        <button
                            className={this.state.isEmojiOpened ? 'messenger-content-input-button__emoji messenger-content-input-button__emoji__active' : 'messenger-content-input-button__emoji'}
                            onClick={this.openEmojiMenu}
                            ref={this.emojiButtonRef}
                            type="button"
                        >
                            <i className="icon icon-emoji"></i>
                        </button>

                        <EmojiBox visible={this.state.isEmojiOpened} onClick={this.props.sendMessage} handleClose={this.closeEmojiMenu} />
                    </form>
                </div>
            </>
        );
    }
}

export default ChatBox;