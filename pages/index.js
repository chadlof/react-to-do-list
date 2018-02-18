import React from 'react'
import Layout from '../components/Layout'
import Title from '../styled-components/Title'
import Heading2 from '../styled-components/Heading2'
import BodyWrapper from '../styled-components/BodyWrapper'
import Container from '../styled-components/Container'

export default () => (
    <Layout>
        <BodyWrapper>
            <Container>
                <Title>This is the Home page</Title>
                <Heading2>Groceary List</Heading2>
                
            </Container>
        </BodyWrapper>
    </Layout>
)