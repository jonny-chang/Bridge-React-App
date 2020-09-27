import React, { Component } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    border-radius: 8px;
    border: solid;
    border-color: var(--blue1);
    margin: 1em;
    padding: 2em;
    max-width: 400px;

`

const NewsTitle = styled.h3`
    color: #a9a9a9;
    &:hover {
        color: #dddddd;
    }
`

class NewsCard extends Component {
    state={
        pColour: '',
        sColour: ''
    }
    componentDidMount(){
        const { countsProfanity, countsSentiment } = this.props
        if (countsProfanity < 1){
            this.setState({pColour: "#228B22" })
        }
        if (countsProfanity === 1){
            this.setState({pColour: "#FF6347" })
        }
        if (countsProfanity > 1){
            this.setState({pColour: "#DC143C" })
        }
        if (countsSentiment < 1){
            this.setState({sColour: "#228B22" })
        }
        if (countsSentiment === 1){
            this.setState({sColour: "#FF6347" })
        }
        if (countsSentiment > 1){
            this.setState({sColour: "#DC143C" })
        }
    }
    render(){
        const { title, imgURL, url, countsProfanity, countsSentiment } = this.props
        return(
            <MainContainer className="card">
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", textAlign: "center", marginTop: "-20px"}}>
                <p style={{color: `${this.state.pColour}`}}>
                        {countsProfanity} profane word(s)
                    </p>
                    <p style={{color: `${this.state.sColour}`}}>
                        Sentiment: {countsSentiment}
                    </p>
                </div>
                
                <img src={imgURL} alt="Cover image" 
                style={{width: "300px", height: "auto", borderRadius: "5px", marginBottom: "1em", textAlign: "center", justifyContent: "center"   }}/> 
                <NewsTitle><a href={url} style={{textDecoration: "none", color: "black"}}>{title}</a></NewsTitle>
                <div
                style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                </div>
            </MainContainer>
        )
    }
}

export default NewsCard