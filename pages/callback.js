import React from 'react'
import styled from 'styled-components'
import Layout from '../components/orginisms/Layout'
import Title from '../components/atoms/Title'
import List from '../components/atoms/List' 

const Section = styled.section`
padding: 1em;
margin: auto;
background-color: #EBEDF2;
border-top: 1px solid #d8d8d8;
`;

const Div = styled.div`
padding: 1em;
/* margin-left: 15em; */
display: inline-block;
margin-left: 20%;
margin-right: 20%;
padding: auto;
width: 60%;
text-align: center;
`;

const H2 = styled.h2`
font-size: 1.25em;
text-align: center;
color: #A49E8D;

`;

export default () => (
    <Layout>
        <Section>
            <Div>
                <Div>
                    <Title title='This is the Home page'></Title>
                </Div>
                <Div>
                    <List></List>
                </Div>
                
            </Div>
        </Section>
    </Layout>
)