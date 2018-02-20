import React from 'react'
import styled from 'styled-components';
import Links from '../atoms/Link'
import Logo from '../atoms/logo'
import Link from 'next/link'

const Div = styled.div`
/* padding: 1em; */
margin-left: 20em;
display: inline-block;
`;
const Div2 = styled.div`
/* padding: 1em; */
margin-left: 8em;
display: inline-block;
/* display: table-cell; */
vertical-align:middle;
line-height: 50px;
`;
const Section = styled.section`
padding: 1em;
margin: auto;
background-color: #5A6D96;
border-top: 1px solid #d8d8d8;
`;

const Header = () => (
 <Section>
     <Div>
        {/* <Div> */}
        <Logo />
        {/* </Div>  */}
        <Div2>
            <Links url='./' title='Home' />
            <Links url='./signUp' title='Sign Up' />
            <Links url='./signIn' title='Sign In' />
            <Links url='./lists' title='Lists' />
            <Links url='./newList' title='New List' />
        </Div2>
    </Div>
</Section>

)

export default Header