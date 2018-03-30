import React from 'react'
import {  Component } from 'react'
import styled from 'styled-components'

const Div = styled.div`
display: block;
position: relative;
padding-left: 35px;
margin-bottom: 12px;
cursor: pointer;
font-size: 22px;
float:left;
text-decoration: line-through;
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

export default class DeletedItem extends Component {
    constructor (props){
        super(props);
        this.deletedItem = props.deletedItem
        
    }

    render() {
       return(
        <Div>
            <Input id="deletedItem" type="checkbox"/>
            <Label for="deletedItem">{this.deletedItem}</Label>
        </Div>
        )
    }

} 