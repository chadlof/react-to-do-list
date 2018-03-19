import React from 'react'
import { Component }  from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Img from 'react-image'
import List from './List'


const ImgWrapper = styled.span`
    /* visibility: hidden; */
    float: right;
`;


export default class AddItem extends Component {
    constructor (props){
        super(props);
        this.item = null
    }
    render() {
        console.log('AddItem-item: ',this.props.item)
       return(
        
            <ImgWrapper>
                <a ref={a => this.item = a}
                    onClick={e => {this.props.onReAdd(this.props.item)}}>
                    <img src="../../static/images/plus-icon.png" alt="Add" height="25" style={{paddingLeft:'20px'}}/>
                </a>
            </ImgWrapper>
            
         
       );


    }
}

