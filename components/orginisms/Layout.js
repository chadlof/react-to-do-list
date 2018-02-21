import React from 'react'
import styled from 'styled-components';
import Header from '../molecules/Header'
import Footer from '../molecules/Footer'
import './reset.css'

const Section = styled.section`
padding: 1em;
margin: auto;
`


const Layout = (props) => (
            <Section>
                <Header />
                {props.children}
                <Footer />
            </Section> 
)

export default Layout