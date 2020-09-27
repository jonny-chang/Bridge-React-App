import React, { Component } from 'react'

class chat extends Component {
    state={}
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
        return(
            <div id="talkjs-container" style={style}>
                <i>Loading chat...</i>
            </div>
        )
    }
}

export default chat
