import React, { Component } from 'react'

import styled from 'styled-components'

const MainContainer = styled.div`
    background-color: white;
    width: 200px;
    height 100%;
    position: fixed;
    left: 0;
    overflow: hidden;
    z-index: 99;
    min-height: 100%;
`

const HomeButton = styled.h4`
    height: 50px;
    padding: 12px;
    border: none;
    border-bottom: 1px solid #d6dbe1;
    font-size: 1em;
    text-align: center;
    font-family: "Segoe UI",Roboto,Helvetica Neue,Arial,sans-serif;
    font-weight: 500;
    margin-top: 12px;
    margin-bottom: 12px;
`

const Tab = styled.h5`
    height: 50px;
    padding: 12px;
    padding-left: 40px;
    border: none;
    font-size: 0.9em;
    text-align: left;
    font-family: "Segoe UI",Roboto,Helvetica Neue,Arial,sans-serif;
    font-weight: 500;
    margin-top: 12px;
    margin-bottom: 12px;
    transition: 0.3s;
    border-left: 5px solid white;
    &:hover {
        border-left: 3px solid var(--blue1);
    }
    &:active {
        border-left: 3px solid var(--blue1);
    }
`

var subURL = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');

class Sidebar extends Component {
    render(){
        subURL = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1')
        console.log(subURL)
        return(
            <MainContainer>
                <a style={{textDecoration: "none"}} href='#'><HomeButton>Bridge</HomeButton></a>
                <a style={{textDecoration: "none"}} href='#'><Tab>Tab 1</Tab></a>
                <a style={{textDecoration: "none"}} href='#'><Tab>Tab 2</Tab></a>
                <a style={{textDecoration: "none"}} href='#'><Tab>Tab 3</Tab></a>
            </MainContainer>
        )
    }
}



export default Sidebar
