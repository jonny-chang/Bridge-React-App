import React, { Component } from 'react'
import styled from 'styled-components'
import Question from '../components/question'
import { Redirect } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

import { connect } from 'react-redux'
import { setAnswer, setStep, clearAnswers, getQuestions } from '../redux/actions/questionActions'

const StartButton = styled.button`
    width: 200px;
    border-radius: 15px;
    padding: 0.5em;
    border: none;
    color: var(--blue1);
    border-color: var(--blue1);
    border: solid;
    background-color: white;
    transition: 0.2s;
    height: 50px;
    margin-top: 2em;
    &:hover {
        background-color: var(--blue1);
        color: white;
    }
`

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
                <div 
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: "100px",
                }}
                >
                    <h1
                    style={{
                        flexBasis: "100%",
                        textAlign: "center",
                        color: "var(--blue1)",
                        fontFamily: "Circular Std Bold"
                    }}
                    >
                        Start your questionnaire today!
                    </h1>
                    <p
                    style={{
                        textAlign: "center",
                        flexBasis: "100%",
                        marginTop: "1em",
                        fontFamily: "Circular Std Book"
                    }}
                    >
                        A number of statements will appear on the screen. For each one,
                        <br/> please, to the best of your ability, answer one of four options:
                        <br/> strongly agree, agree, disagree, or strongly disagree. If you feel that
                        <br/> none of these options suit you for the current statement, feel free to
                        <br/> type out your opinions in the box labeled "other." Your answers will aid
                        <br/> us determine your opinions on several polarizing topics, helping us
                        <br/> pair you up with others who have different views to you.
                    </p>
                    <StartButton onClick={this.handleStart}>Begin</StartButton>
                </div>
            )
        }
        else if (questions && currentQ <= length) {
            return (
                <Fade>
                    <Question q={questions[currentQString].question}/>
                </Fade>
            )
        }
        else if (questions && currentQ > length){
            return(
                <Redirect to='/'/>
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
