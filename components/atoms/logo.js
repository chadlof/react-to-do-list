import React from 'react'
import styled from 'styled-components';
import Img from 'react-image'
import Link from 'next/link'
import Links from './Link'

const H3 = styled.h3`
/* text-align: center; */
padding: 1.25em;
color: #252524;
font-size: 1em;
padding-top:.25em;
margin-top:0;
`;
const Div = styled.div`
padding: 1em;
margin-left: 5em;
display: inline-block;

`;
const A = styled.a`
    margin-left: 1.5em;
`

const Logo = () =>(
<Div>
    <Link href='./'>
        <A><Img src="../../static/images/logo.png" alt="Img" height="50" /></A>
    </Link>
    <H3>ToDLists </H3>
</Div>
)

export default Logo