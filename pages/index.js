import React from 'react'
import styled from 'styled-components'
import Layout from '../components/orginisms/Layout'
// import Title from '../components/atoms/Title'
import List from '../components/orginisms/List' 

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



const index = () => (
    <Layout >
        <Section>
            <Div>
                {/* <Div>
                    <Title title='This is the Home page'></Title>
                </Div> */}
                <Div>
                    <List className="not-a-class"></List>
                </Div>
                
            </Div>
        </Section>
    </Layout>
)
export default index