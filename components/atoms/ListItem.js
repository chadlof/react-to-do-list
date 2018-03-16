import React from 'react'
import {  Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import RemoveItem from './RemoveItem'
import Img from 'react-image'

const Div = styled.div`
display: block;
position: relative;
padding-left: 35px;
margin-bottom: 12px;
cursor: pointer;
font-size: 22px;
float:left;
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

export default class ListItem extends Component {
    constructor (props){
        super(props);
        this.listitem = props.listitem
        
    }

    render() {
       return(
        <Div>
            <Input id="listitem" type="checkbox"/>
            <Label for="listitem">{this.listitem}</Label>
        </Div>
        )
    }

}