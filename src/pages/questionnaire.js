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
    render(){
        const { currentQ } = this.props.questions
        return(<div></div>)
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
