import {  Component } from 'react'
import ReactDOM from 'react-dom'
import React from 'react'
import styled from 'styled-components'
import Binder from 'react-binding'
import Link from 'next/link'
import Title from './Title'
import ListItem from './ListItem'
import NewItem from './NewItem'
import RemoveItem from './RemoveItem'
import ImgWrapper from './RemoveItem'

const Div = styled.div`
padding: 1em;
display: inline-grid;
position: relative;
font-size: 22px;
`;
const RemoveIcon = styled(ImgWrapper)``

const Div2 = styled.div`
padding: 1em;
display: block;
position: relative;
font-size: 22px;

&:hover ${RemoveIcon} {
    visibility: hidden;
    
}
`;




export default class List extends Component {
    constructor(props){
        super(props);
        this.state = { listArray: ['Dog food', 'Bananas', 'Thumb Drive', 'Mouse' ]};

 
        this.addItemToListArray = this.addItemToListArray.bind(this);
        this.removeItemFromListArray = this.removeItemFromListArray.bind(this);

    }
    addItemToListArray(newItem) {
         if (newItem != "") {
            const newListArray = this.state.listArray.slice(0);
            newListArray.push(newItem);
            this.setState({
                listArray: newListArray
            })
         }
    }

    removeItemFromListArray(index) {
        
        const newListArray = this.state.listArray.slice(0);
        console.log('newListArray: '+newListArray)
        console.log('index: '+index)//shows the correct index of the item I choose to remove
        const removedItem = newListArray.splice(index,1,);//replacing the first param to any num has no change
        console.log('removedItem: '+removedItem)//removes the correct item
        console.log('newListArray after splice: '+newListArray)//the correct item is removed from newListArray

        
        this.setState ({
            listArray: newListArray
        })
        console.log('listArray after setState(): '+this.state.listArray)//still holds the full array - no its was removed
        console.log('Object.keys: '+Object.keys(this.state.listArray))//same as above
        
        //after deleting a couple items 
        //- in the console newListArray is corect
        //- after setState() ListArray has not updated 
        //- and what is renderd on screen is completly diffrent, its keeps deleting the last item in the list
    }
    
    render () {
        return(
            <Div className={this.props.className}>
                <Title className={this.props.className} 
                        title="Things to buy"></Title>
                <Div className={this.props.className}>
                    {this.state.listArray.map((item, index) => (
                        <Div2 className={this.props.className} 
                                key={"div"+index}>
                            <ListItem className={this.props.className} 
                                        key={"item"+index} listitem={item}></ListItem>
                            <RemoveItem className={this.props.className} 
                                        key={"remove"+index}    
                                        onRemove={this.removeItemFromListArray}
                                        index={index}></RemoveItem>
                        </Div2>
                        
                    ))}
                </Div>
                
                <NewItem className={this.props.className} 
                            onAdd={this.addItemToListArray}></NewItem>
              
            </Div>
        );
    }
    // componentDidMount() {
    //     setInterval(this.removeItemFromListArray, 1000);
    //    }
}
    



