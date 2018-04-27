import React from 'react'
import styled from 'styled-components'
import Layout from '../components/orginisms/Layout'
import Title from '../components/atoms/Title'

import {createStore} from "redux";
import withRedux from "next-redux-wrapper";

const reducer = (state = {foo: 'hello world'}, action) => {
    switch (action.type) {
        case 'FOO':
            return {...state, foo: action.payload};
        default:
            return state
    }
};

const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};


const Section = styled.section`
padding: 1em;
margin: auto;
background-color: #EBEDF2;
border-top: 1px solid #d8d8d8;
`;

const Div = styled.div`
padding: .5em;
/* margin-left: 15em; */
display: inline-block;
margin-left: 10%;
margin-right: 10%;
padding: auto;
width: 80%;
text-align: center;
`;



const List = (props) => (
    <Layout >
        <Section>
            <Div>
                <Div>
                    <Title title='This is the list page'></Title>
                </Div>
                <div>The value in redux.foo is {props.foo}</div>
            </Div>
        </Section>
    </Layout>
)

const connectedPage = withRedux(makeStore, (state) => ({foo: state.foo}))(List);
export default connectedPage