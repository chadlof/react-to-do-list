import React from 'react'
import styled from 'styled-components';
import Header from '../molecules/Header'
import Footer from '../molecules/Footer'

const Section = styled.section`
padding: 1em;
margin: auto;
`


const Layout = (props) => (
            <Section>
                <Header />
                {props.children}
                <Footer />
                <style jsx global>{`
                    body {
                        margin: 0;
                        padding: 0;
                    }
                `}</style>
            </Section> 
)

export default Layout