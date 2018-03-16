import React from 'react'
import {  Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Img from 'react-image'
import List from './List'


const Div = styled.div`
display: flex;
position: relative;
margin-bottom: 12px;
cursor: pointer;
font-size: 22px;
`;
const InputWrapper = styled.span`
position: absolute;
left: 70px;

input {
height: 25px;
width: 125px;
background-color: #eee;
font-size: 18p;
}
`

export default class NewItem extends Component {
    constructor (props){
        super(props);
        this.newItemInput = null
    }
    render() {
       return(
        <Div >
            <InputWrapper>
                 <input type="text" name="newitem"  placeholder=" Add new item" 
                        ref={input => this.newItemInput = input}/>
            </InputWrapper>
            <Img src="../../static/images/plus-icon.png" alt="Add" height="30" style={{paddingLeft:'210px'}}
            onClick={e => {
                this.props.onAdd(this.newItemInput.value)
       }}/>
        </Div>
       );


    }
}

