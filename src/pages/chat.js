import React, { Component } from 'react'
import { connect } from 'react-redux';

class chat extends Component {
    state={
        message: ""
    }
    updateMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetch(`http://13.57.251.106/send-message?user=${this.props.user.email}&message=${e.target.value}&`)
            .then(res => res.json())
            .then(
              (result) => {
                  
                }
            )
        }
    }
    render(){
        const style = {
            width: "100%",
            padding:"0 10%",
            textAlign: "center",
            margin: "0 auto",
            fontSize: 200,
            margin: 30,
            height: 600
        };
        const textAreaStyle = {
            position: "fixed",
            width: "402px",
            textAlign: "center",
            left: "48%",
            top: "80.5%",
            fontSize: 16,
            height: "47px"
        };
        return(
            <div> 
                <div id="talkjs-container" style={style}>
                    <i>Loading chat...</i>
                </div>
                <input style={textAreaStyle} onKeyDown={this._handleKeyDown} placeholder="Enter your message here" value={this.state.message} onChange={this.updateMessage}>
                    
                </input>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
})

const mapActionsToProps = {
    
}

export default connect(mapStateToProps, mapActionsToProps)(chat);
