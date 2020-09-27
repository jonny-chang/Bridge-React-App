import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import Background from '../images/signup-background.png';
import Logo from '../images/logo.png'

// Redux
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';

const SignupContainer = styled.div`
    display: block;
    width: 500px;
    padding: 40px 70px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    position: absolute;
    right: 50px;
    top: 50px;
    margin-bottom: 50px;
`

const Title = styled.h1`
    margin-top: 46px;
    text-align: center;
    font-family: 'Circular Std Bold';
    color: var(--blue1);
`

const TopInput = styled.input`
    font-family: "Circular Std Book";
    font-size: 23px;
    margin-top: 40px;
`

const MiddleInput = styled.input`
    font-family: "Circular Std Book";
    font-size: 23px;
    margin-top: 25px;
`

const LastInput = styled.input`
    font-family: "Circular Std Book";
    font-size: 23px;
    margin-top: 25px;
    margin-bottom: 80px;
`

const SignupButton = styled.button`
    background-color: var(--blue1);
    color: #eee;
    font-family: 'Circular Std Bold';
    margin-bottom: 46px;
    &:hover {
        color: #fff;
    }
`

class signup extends Component {
    state={
        fname: "",
        lname: "",
        email: "",
        password: "",
        errors: []
    }
    updateEmail = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updatePassword = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    updateName = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            password: this.state.password
        }
        this.props.signupUser(userData, this.props.history)
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.user.errors){
            this.setState({
                errors: nextProps.user.errors
            })
        }
    }
    render(){
        const { errors } = this.state
        return (
            <Fragment>
                <div>
                    <SignupContainer>
                        <img src={Logo} style={{height: "100px", position: "absolute", marginLeft: "130px", marginTop: "-10px"}}/>
                        <Title>Signup</Title>
                        <form onSubmit={this.handleSubmit}>
                            <TopInput 
                            name="fname" 
                            type="text" 
                            onChange={this.updateName} 
                            value={this.state.fname}
                            aria-label="Fname"
                            className="form-control"
                            placeholder="First Name"
                            />
                            <MiddleInput 
                            name="lname" 
                            type="text" 
                            onChange={this.updateName} 
                            value={this.state.lname}
                            aria-label="Lname"
                            className="form-control"
                            placeholder="Last Name"
                            />
                            <MiddleInput 
                            name="email" 
                            type="text" 
                            onChange={this.updateEmail} 
                            value={this.state.email}
                            aria-label="Email"
                            className="form-control"
                            placeholder="Email"
                            />
                            <LastInput 
                            name="password" 
                            type="password" 
                            onChange={this.updatePassword} 
                            value={this.state.password}
                            aria-label="Password"
                            className="form-control"
                            placeholder="Password"
                            />
                            <br/>
                            <SignupButton type="submit" className="btn btn-block btn-lg">
                                Signup
                            </SignupButton>
                        </form>
                    </SignupContainer>
                    <div className="container" style={{paddingTop: "70px", paddingBottom: "70px"}}>
                        <Title style={{textAlign: "left", fontSize: "3em", marginTop: "0", transform: "translateX(-20px)"}}>Bridge The Gap</Title>
                        <h5 style={{fontFamily: "Circular Std Book", fontSize: "2em", transform: "translateX(-20px)", marginTop: "15px"}}>Meet new people<br/> Learn new experiences</h5>
                    </div>
                </div>
                <div 
                style={{
                    width: "100%", 
                    height: "85vh", 
                    backgroundImage: `url(${Background})`, 
                    position: "absolute", 
                    zIndex: "-1", 
                    left: "0",
                    backgroundSize: "cover",
                }}/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
})

const mapActionsToProps = {
    signupUser,
}

export default connect(mapStateToProps, mapActionsToProps)(signup);
