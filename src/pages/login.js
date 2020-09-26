import React, {Component} from 'react'

// Redux
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';


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
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", textAlign: "center"}}>
                <h1 style={{flexBasis: "100%"}}>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <br/>
                    <input 
                    name="email" 
                    type="text" 
                    onChange={this.updateEmail} 
                    value={this.state.email}
                    aria-label="Email"
                    />
                    <br/>
                    <label>Password</label>
                    <br/>
                    <input 
                    name="password" 
                    type="password" 
                    onChange={this.updatePassword} 
                    value={this.state.password}
                    aria-label="Password"
                    />
                    <br/>
                    <button type="submit">
                        Login
                    </button>
                    {errors && (
                        <p>{errors}</p>
                    )}
                </form>
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
