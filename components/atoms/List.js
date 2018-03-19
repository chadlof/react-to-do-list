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
import DeletedItem from './DeletedItem'
import AddItem from './AddItem'

const Div = styled.div`
padding: 1em;
display: inline-grid;
position: relative;
font-size: 22px;
`;


const Div2 = styled.div`
padding: 1em;
display: block;
position: relative;
font-size: 22px;

&:hover .remove-icon {
    visibility: visible;
    cursor: pointer;
}
`;




export default class List extends Component {
    constructor(props){
        super(props);
        this.state = { 
                        listArray: ['Dog food', 'Bananas', 'Thumb Drive', 'Mouse' ],
                        deletedItemsArray:[]
                    };
        

 
        this.addItemToListArray = this.addItemToListArray.bind(this);
        this.removeItemFromListArray = this.removeItemFromListArray.bind(this);

    }
    addItemToListArray(item) {
         if (item != "") {
             
            const newListArray = this.state.listArray.slice(0);
            newListArray.push(item);

            this.setState({
                listArray: newListArray
            })
         }
    }

    removeItemFromListArray(index) {
        const newListArray = this.state.listArray.slice(0);
        const removedItem = newListArray.splice(index,1,);
        const newDeletedItemsArray = this.state.deletedItemsArray.slice(0);
        newDeletedItemsArray.push(removedItem.toString())
     
        this.setState ({
            listArray: newListArray,
            deletedItemsArray: newDeletedItemsArray
        })
    
    }
    
    reAddItemToListArray(item) {
        const newListArray = this.state.listArray.slice(0);
        console.log('reAdd-newListArray: ',newListArray);
        newListArray.push(item);

        this.setState({
            listArray: newListArray
        })
    }
    
    render () {
        
        return(
            <Div>
                <Title title="Things to buy" />
                <Div>
                    {this.state.listArray.map((item, index) => (
                        <Div2 key={"div"+item+index}>
                            <ListItem listitem={item} />
                            <RemoveItem
                                className="remove-icon"
                                onRemove={this.removeItemFromListArray}
                                index={index}
                            />
                        </Div2>
                        
                    ))}
                </Div>
                
                <NewItem className={this.props.className} 
                            onAdd={this.addItemToListArray} />
                <Title title="Deleted Items" />
                <Div>
                    {this.state.deletedItemsArray.map((item, index) => (
                        <Div2 key={"div"+item+index}>
                            <DeletedItem deletedItem={item} />
                            <AddItem
                                className="reAdd-icon"
                                // onReAdd={this.reAddItemToListArray}
                                onReAdd={this.addItemToListArray}
                                index={index}
                                item={item}
                            />
                        </Div2>
                        
                    ))}
                </Div>
              
            </Div>
        );
    }
   
}
    



