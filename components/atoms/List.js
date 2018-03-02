import {  Component } from 'react'
import ReactDOM from 'react-dom'
import React from 'react'
import styled from 'styled-components';
import Binder from 'react-binding';
import Link from 'next/link'
import Title from './Title'
import ListItem from './ListItem';
import NewItem from './NewItem';

const Div = styled.div`
padding: 1em;
display: inline-grid;
position: relative;
font-size: 22px;
`;




export default class List extends Component {
    constructor(props){
        super(props);
        this.state = { listArray: ['dog food', 'Bananas', 'Thumb Drive', 'Mouse' ]};

 
        this.updateListArray = this.updateListArray.bind(this);

    }
     updateListArray(newItem) {
         if (newItem != "") {
            const newListArray = this.state.listArray.slice(0);
        newListArray.push(newItem);
        this.setState({
            listArray: newListArray
        })
         }
        


    }
    
    render () {
        return(
            <Div>
                <Title title="Things to buy"></Title>
                {this.state.listArray.map((item, index) => (
                    <ListItem key={index} listitem={item}></ListItem>
                ))}
                <NewItem onAdd={this.updateListArray}></NewItem>
              
            </Div>
        );
    }
}
    



