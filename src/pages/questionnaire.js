import React, { Component } from 'react'
import styled from 'styled-components'
import Question from '../components/question'

import { connect } from 'react-redux'
import { setAnswer, setStep, clearAnswers, getQuestions } from '../redux/actions/questionActions'

class questionnaire extends Component {

    componentDidMount(){
        this.props.getQuestions();
    }
    componentWillUnmount(){
        this.props.clearAnswers();
    }
    handleStart = () => {
        this.props.setStep(1)
    }
    render(){
        const { currentQ, questions } = this.props.questions
        var currentQString = currentQ.toString()
        var length = Object.keys(questions).length
        if (currentQ === 0) {
            return (
                <div>
                    <h1>Start now</h1>
                    <button onClick={this.handleStart}>Start</button>
                </div>
            )
        }
        else if (questions && currentQ <= length) {
            return (
                <Question q={questions[currentQString].question}/>
            )
        }
        else if (questions && currentQ > length){
            return(
                <div>
                    <h1>You have successfully completed the questions</h1>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    data: state.data,
    questions: state.questions
})

const mapActionsToProps = {
    setAnswer, 
    setStep, 
    clearAnswers,
    getQuestions
}

export default connect(mapStateToProps, mapActionsToProps)(questionnaire);
