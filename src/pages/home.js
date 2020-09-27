import React, { Component } from 'react'
import styled from 'styled-components'
import { setCID } from '../redux/actions/dataActions'
import { connect } from 'react-redux';


const JoinButton = styled.button`
    width: 40rem;
    height: 40rem;
    border-radius: 30rem;
    font-size: 10rem;
    font-family: 'Circular Std Bold';
    background-color: var(--blue1);
    color: white;
`

const MainContainer = styled.div`
    position: absolute; 
    top: calc(50% - 20rem);
    left: calc(50% - 20rem);
`

class home extends Component {
    state={}
    handleClick = (e) => {
        fetch(`http://13.57.251.106/generate-chat-token?email=${this.props.user.email}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.props.setCID(result.token, this.props.history)
            }
        )
        
    }
    render(){
        return(
            <MainContainer onClick={this.handleClick}>
                <JoinButton>Join</JoinButton>
            </MainContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
})

const mapActionsToProps = {
    setCID,
}

export default connect(mapStateToProps, mapActionsToProps)(home);
