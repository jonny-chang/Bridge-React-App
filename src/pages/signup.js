import React, {Component} from 'react'

// Redux
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';


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
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", textAlign: "center"}}>
                <h1 style={{flexBasis: "100%"}}>Signup</h1>
                <form onSubmit={this.handleSubmit}>
                <label>First Name</label>
                    <br/>
                    <input 
                    name="fname" 
                    type="text" 
                    onChange={this.updateName} 
                    value={this.state.fname}
                    aria-label="Fname"
                    />
                    <br/>
                    <label>LastName</label>
                    <br/>
                    <input 
                    name="lname" 
                    type="text" 
                    onChange={this.updateName} 
                    value={this.state.lname}
                    aria-label="Lname"
                    />
                    <br/>
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
                        Signup
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
    signupUser,
}

export default connect(mapStateToProps, mapActionsToProps)(signup);
