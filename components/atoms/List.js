import { Component } from 'react'
import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import ListItem from './ListItem'
import NewItem from './NewItem'
import RemoveItem from './RemoveItem'
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
    cursor:pointer;
}
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

 deletedItemsTitle() {

        if (this.state.deletedItemsArray.length != 0) {
            const title = null
            return title
        }else {
            const title = <Title title="Deleted Items" />
            return title
        }
        
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
                
                <NewItem className="newItem"
                            onAdd={this.addItemToListArray} />
                {
                    this.state.deletedItemsArray.length != 0
                    ? <Title title="Deleted Items" />
                    : null
                }
                <Div>
                    {this.state.deletedItemsArray.map((item, index) => (
                        <Div2 key={"div"+item+index}>
                            <DeletedItem deletedItem={item} />
                            <AddItem
                                className="reAdd-icon"
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
    



