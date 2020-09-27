import React, { Component } from 'react'
import styled from 'styled-components'
import Question from '../components/question'

import { connect } from 'react-redux'
// import { setAnswer, setStep, clearAnswers } from '../redux/actions/questionActions'

class questionnaire extends Component {
    render(){
        const { currentQ } = this.props.questions
        switch(currentQ) {
            case 0:
                return (
                    <Question 
                    q="What do you think of Trump?"/>
                )
            case 1:
                return (
                    <Question 
                    q="What do you think of Trump?"/>
                )
            default:
                return (<div/>)
        }
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    data: state.data,
    questions: state.questions
})

const mapActionsToProps = {
    // setAnswer, 
    // setStep, 
    // clearAnswers
}

export default connect(mapStateToProps, mapActionsToProps)(questionnaire);
