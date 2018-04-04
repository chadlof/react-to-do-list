import React from 'react'
import { Component }  from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'



const ImgWrapper = styled.span`
    /* visibility: hidden; */
    float: right;
`;


export default class ReAddItem extends Component {
    constructor (props){
        super(props);
        this.item = null
        this.index = null
    }
    render() {
       return(
        
            <ImgWrapper>
                <a ref={a => this.item = a}
                    onClick={() => {this.props.onReAdd(this.props)}}>
                    <img src="../../static/images/plus-icon.png" alt="Add" height="25" style={{paddingLeft:'20px'}}/>
                </a>
            </ImgWrapper>
            
         
       );


    }
}

ReAddItem.propTypes = {
    onReAdd: PropTypes.func.isRequired
}
