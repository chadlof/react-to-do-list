import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import Img from 'react-image'
import listArray from './List'

const Div = styled.div`
display: flex;
position: relative;
margin-bottom: 12px;
cursor: pointer;
font-size: 22px;
`;
const Input = styled.input`
position: absolute;
left: 70px;
height: 25px;
width: 125px;
background-color: #eee;
font-size: 18px;
`


export function updateListArray(props){
    // const listArray = ['dog food', 'Bananas', 'Thumb Drive', 'Mouse' ]
    // require("./List");
    
    listArray.push('test');
    console.log(listArray);
}

export default (props) =>(

    <Div>
        <Input type="text" name="newitem" placeholder=" Add new item" />
        <Img src="../../static/images/plus-icon.png" alt="Add" height="30" style={{paddingLeft:'210px'}} 
        // onClick={e => console.log(e.target.value)}/>
        onClick={e => updateListArray(e)} /> 
    </Div>
)
