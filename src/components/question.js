import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { setAnswer, setStep, clearAnswers, analyze } from '../redux/actions/questionActions'

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    padding-top: 5em;
    text-align: center;
    justify-content: center;
`

const Question = styled.h2`
    font-family: 'Circular Std Bold';
    color: var(--blue1);
    font-size: 3.2em;
    width: 595px;
    text-align: left;
`

const AnswersContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 5em;
`

const AnswersSubContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    row-gap: 2em;
    margin-top: 3em;
`

const AnswersFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 15px;
    row-gap: 2em;
    margin-top: 4em;
`

const AnswerButton = styled.button`
    background-color: white;
    color: black;
    border-radius: 15px;
    height: 5em;
    font-family: 'Circular Std Book';
    border: solid;
    border-color: var(--blue1);
    transition: 0.2s;
    outline: none;
    width: 15em;
    font-size: 1.2em;
    &:hover {
        background-color: var(--blue1);
        color: white;
    }
`

const AnswerInput = styled.input`
    border-radius: 15px;
    border: solid;
    font-family: 'Circular Std Book';
    transition: 0.5s;
    background-color: white;
    color: black;
    padding-left: 1em;
    padding-right: 1em;
    border-color: var(--blue1);
    width: 450px;
    height: 91px;
`

const SubmitButton = styled.button`
    width: 126px;
    border-radius: 15px;
    padding: 0.5em;
    border: none;
    color: var(--blue1);
    border-color: var(--blue1);
    border: solid;
    background-color: white;
    transition: 0.2s;
    height: 91px;
    &:hover {
        background-color: var(--blue1);
        color: white;
    }
`

const BackButton = styled.button`
    color: black;    
    width: 5em;
    border-radius: 15px;
    padding: 0.5em;
    border: none;
    color: var(--blue1);
    border-color: var(--blue1);
    background-color: white;
    text-decoration: underline;
`

class question extends Component {
    state={
        other: "",
        disabled: true,
    }
    updateOther = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        if (this.state.other !== ""){
            this.props.analyze(this.state.other, true, this.props.questions.currentQ)
            this.props.setStep(this.props.questions.currentQ + 1)
        }
        this.setState({
            other: ""
        })
    }
    handleSAgree = (event) => {
        this.props.analyze(1, false, this.props.questions.currentQ)
        this.props.setStep(this.props.questions.currentQ + 1)
    }
    handleSDisagree = (event) => {
        this.props.analyze(-1, false, this.props.questions.currentQ)
        this.props.setStep(this.props.questions.currentQ + 1)
    }
    handleAgree = (event) => {
        this.props.analyze(0.5, false, this.props.questions.currentQ)
        this.props.setStep(this.props.questions.currentQ + 1)
    }
    handleDisagree = (event) => {
        this.props.analyze(-0.5, false, this.props.questions.currentQ)
        this.props.setStep(this.props.questions.currentQ + 1)
    }
    render(){
        const { q } = this.props
        return (
            <MainContainer>
                <div/>
                <div>
                    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
                        <div/>
                        <div>
                            <Question>
                                {q}
                            </Question>
                            <hr style={{width: "595px", border: "2px solid #eee"}}/>
                        </div>
                    </div>
                </div>
                <div/>
                <div/>
                <AnswersContainer>
                    <div/>
                    <AnswersSubContainer>
                        <AnswerButton style={{outline: "none"}} onClick={this.handleSAgree}>
                            I strongly agree
                        </AnswerButton>
                        <AnswerButton style={{outline: "none"}} onClick={this.handleSDisagree}>
                            I strongly disagree
                        </AnswerButton>
                        <AnswerButton style={{outline: "none"}} onClick={this.handleAgree}>
                            I agree
                        </AnswerButton>
                        <AnswerButton style={{outline: "none"}} onClick={this.handleDisagree}>
                            I disagree
                        </AnswerButton>
                    </AnswersSubContainer>
                    <div/>
                    <br/>
                    <AnswersFlexContainer style={{marginTop: "2em"}}>
                        <AnswerInput 
                            style={{outline: "none"}} 
                            placeholder="Other" 
                            value={this.state.other}
                            onChange={this.updateOther}
                            name="other"
                            type="text"
                        />
                            <SubmitButton className="btn" 
                            onClick={this.handleSubmit} 
                            >
                                Submit
                            </SubmitButton>
                        
                    </AnswersFlexContainer>
                </AnswersContainer>
                
            </MainContainer>
        )
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
    analyze
}

export default connect(mapStateToProps, mapActionsToProps)(question);
