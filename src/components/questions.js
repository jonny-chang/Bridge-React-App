import React, { Component } from 'react'

import { connect } from 'react-redux';

class questions extends Component {
    render(){
        return(
            <div><h1>a</h1></div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    data: state.data
})

const mapActionsToProps = {
    
}

export default connect(mapStateToProps, mapActionsToProps)(questions);
