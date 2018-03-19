import React from 'react'
import styled from 'styled-components';
import Img from 'react-image'
import Link from 'next/link'


const Div = styled.div`
padding: 1em;
margin-left: 5em;
display: inline-block;

`;
const A = styled.a`
    margin-left: 1.5em;
`

const SocialMedia = () =>(
<Div>
    <Link href='./'>
        <A><Img src="../../static/images/facebook.png" alt="Img" height="25" /></A>
    </Link>
    <Link href='./'>
        <A><Img src="../../static/images/google-plus.png" alt="Img" height="25" /></A>
    </Link>
    <Link href='./'>
        <A><Img src="../../static/images/linkedin.png" alt="Img" height="25" /></A>
    </Link>
    <Link href='./'>
        <A><Img src="../../static/images/twitter.png" alt="Img" height="25" /></A>
    </Link>
</Div>
)

export default SocialMedia