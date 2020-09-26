import React, {Component} from 'react'
import styled from 'styled-components'

// Redux
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

const LoginContainer = styled.div`
    display: block;
    width: 500px;
    height: 500px;
    padding: 40px 70px;
    margin: calc(50vh - 250px) auto 0;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
`

const Title = styled.h1`
    margin-top: 46px;
    text-align: center;
    font-family: 'Circular Std Bold';
    color: #DA2D8D;
`

const EmailInput = styled.input`
    font-family: "Circular Std Book";
    font-size: 23px;
    margin-top: 40px;
`

const PasswordInput = styled.input`
    font-family: "Circular Std Book";
    font-size: 23px;
    margin-top: 25px;
    margin-bottom: 80px;
`

const LoginButton = styled.button`
    background-color: #DA2D8D;
    color: #eee;
    font-family: 'Circular Std Bold';
    &:hover {
        color: #fff;
    }
`


class login extends Component {
    state={
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
    handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData, this.props.history)
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
            <div className="container-fluid">
                <LoginContainer>
                    <Title>Login</Title>
                    <form onSubmit={this.handleSubmit}>
                        <EmailInput 
                        className="form-control"
                        name="email" 
                        type="text" 
                        onChange={this.updateEmail} 
                        value={this.state.email}
                        aria-label="Email"
                        placeholder="Email"
                        />
                        <PasswordInput 
                        className="form-control"
                        name="password" 
                        type="password" 
                        onChange={this.updatePassword} 
                        value={this.state.password}
                        aria-label="Password"
                        placeholder="Password"
                        />
                        <LoginButton type="submit" className="btn btn-block btn-lg">
                            Login
                        </LoginButton>
                    </form>
                </LoginContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
})

const mapActionsToProps = {
    loginUser,
}

export default connect(mapStateToProps, mapActionsToProps)(login);
