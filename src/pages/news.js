import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewsCard from '../components/NewsCard'

import {setNews} from '../redux/actions/dataActions'


class news extends Component {
    state={}
    componentDidMount(){
        this.props.setNews();
    }
    render(){
        const { news } = this.props.data


        if (news.length > 0){
            return(
                <div>
                    <h1 style={{
                        fontFamily: "Circular Std Bold",
                        textAlign: "center",
                        marginTop: "1em",
                        marginBottom: "15px",
                        color: "var(--blue1)"
                    }}>
                    News Stories</h1>
                    <div
                    style={{
                        display: "flex",
                        flexFlow: "row wrap",
                        justifyContent: "center",
                        columnGap: "3em"
                    }}>
                        {news.map(obj => <NewsCard title={obj.title} imgURL={obj.urlToImage} url={obj.url}
                        countsProfanity={obj.countsProfanity} countsSentiment={obj.countsSentiment}
                        />)}
                    </div>
                </div>
                )
            }
            else{
                return (
                    <div/>
                )
        }
    }
}

const mapStateToProps = (state) => ({
    data: state.data,
})

const mapActionsToProps = {
    setNews
}

export default connect(mapStateToProps, mapActionsToProps)(news);