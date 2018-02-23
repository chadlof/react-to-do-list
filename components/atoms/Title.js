import React from 'react'
import styled from 'styled-components'

const H1= styled.h1`
font-size: 1.5em;
text-align: center;
color: #FF9244;

`;
const Title = (props) =>(
    <H1>{props.title}</H1>
)

export default Title
