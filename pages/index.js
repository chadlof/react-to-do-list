import React from 'react'
import styled from 'styled-components'
import Layout from '../components/orginisms/Layout'
import Title from '../components/atoms/Title'

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
                <Title title='This is the Home page'></Title>
                <H2>Groceary List</H2>
            </Div>
        </Section>
    </Layout>
)