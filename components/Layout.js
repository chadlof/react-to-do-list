import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Wrapper from '../styled-components/Wrapper'


const Layout = (props) => (
    <html>
        <body>
            {/* <Wrapper> */}
                <Header />
                {props.children}
                <Footer />
            {/* </Wrapper>  */}
         </body>
     </html>
)

export default Layout