import React from 'react'
import { Component }  from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Img from 'react-image'
import List from './List'


const ImgWrapper = styled.span`
   /* visibility: hidden; */

/* &:hover {
    visibility: visible;
    display:inline-block;
} */

`;


export default class RemoveItem extends Component {
    constructor (props){
        super(props);
        this.index = null
    }
    render() {
       return(
        
            <ImgWrapper className={this.props.className}>
                <a ref={a => this.index = a}
                    onClick={e => {this.props.onRemove(this.props.index)}}>
                    <img src="../../static/images/trash-icon.png" alt="Remove" height="25" style={{paddingLeft:'20px'}}/>
                </a>
            </ImgWrapper>
            
         
       );


    }
}

