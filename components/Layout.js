import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {MainWrapper, Wrapper, BodyWrapper,Container, Title, Heading2, Paragraph, Anchor}from '../style'


const Layout = (props) => (
    <html>
        <body>
            <MainWrapper>
                <Header />
                {props.children}
                <Footer />
            </MainWrapper> 
         </body>
     </html>
)

export default Layout