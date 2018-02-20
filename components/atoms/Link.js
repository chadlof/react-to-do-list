import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'

const Anchor = styled.a`
text-align: center;
padding: 1em;
margin-left: 1em;
color: #A49E8D;

&:hover {
   text-decoration: underline;
   cursor: pointer;
 }
 &:active {
   color: #FF9244;
 }
`;

const Links = (props) => (
    // <li>
        <Link href={`/${props.url}`}>
        <Anchor>{props.title}</Anchor>
        </Link>
    // </li>
)

export default Links