import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'

const Div = styled.div`
display: inline-block;
position: relative;
padding-left: 35px;
margin-bottom: 12px;
cursor: pointer;
font-size: 22px;
`;
const Input = styled.input`
position: absolute;
left: 0;
height: 25px;
width: 25px;
background-color: #eee;
`
const Label = styled.label`
`
const ListItem = (props) =>(

    <Div>
        <Input id="listitem" type="checkbox"/>
        <Label for="listitem">{props.listitem}</Label>
    </Div>
)

export default ListItem