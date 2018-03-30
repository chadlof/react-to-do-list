import React from 'react'
import { Component }  from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'



const ImgWrapper = styled.span`
    /* visibility: hidden; */
    float: right;
`;


export default class RemoveItem extends Component {
    constructor (props){
        super(props);
        this.index = null
    }
    render() {
       return(
        
            <ImgWrapper>
                <a ref={a => this.index = a}
                    onClick={() => {this.props.onRemove(this.props.index)}}>
                    <img src="../../static/images/trash-icon.png" alt="Remove" height="25" style={{paddingLeft:'20px'}}/>
                </a>
            </ImgWrapper>
            
         
       );


    }
}

RemoveItem.propTypes = {
    onRemove: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

