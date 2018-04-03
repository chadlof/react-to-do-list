import { Component } from 'react'
import React from 'react'
import styled from 'styled-components'
import Title from '../../atoms/Title'
import NewItem from '../../atoms/NewItem'
import DeletedItems from './components/DeletedItems'
import ListItems from './components/ListItems'


const Div = styled.div`
padding: 1em;
display: inline-grid;
position: relative;
font-size: 22px;
`;





export default class List extends Component {
    constructor(props){
        super(props);
        this.state = 
                    { 
                    listArray: ['Dog food', 'Bananas', 'Thumb Drive', 'Mouse' ],
                    deletedItemsArray:[]
                    };

                    
        this.addItemToListArray = this.addItemToListArray.bind(this);
        this.removeItemFromListArray = this.removeItemFromListArray.bind(this);
        this.reAddItemToListArray = this.reAddItemToListArray.bind(this);

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

    reAddItemToListArray(props) {
            const newListArray = this.state.listArray.slice(0);
            newListArray.push(props.item);
            const newDeletedItemsArray = this.state.deletedItemsArray.slice(0);
            newDeletedItemsArray.splice(props.index,1);

            this.setState({
                listArray: newListArray,
                deletedItemsArray: newDeletedItemsArray
            })
        }
    
    render () {
        return(
            <Div>
                <Title title="Things to buy" />
                <ListItems
                    listArray={this.state.listArray}
                    removeItemFromListArray={this.removeItemFromListArray}
                />
                
                
                <NewItem
                    className="newItem"
                    onAdd={this.addItemToListArray}
                />
                <DeletedItems
                    deletedItemsArray={this.state.deletedItemsArray}
                    reAddItemToListArray={this.reAddItemToListArray}
                />
                                    
                </Div>	             
            );	         
        }	     
}
    



