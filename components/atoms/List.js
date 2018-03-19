import {  Component } from 'react'
import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import ListItem from './ListItem'
import NewItem from './NewItem'
import RemoveItem from './RemoveItem'


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
        newListArray.splice(index,1,);
        // const removedItem = newListArray.splice(index,1,);
 

        
        this.setState ({
            listArray: newListArray
        })
    
    }
    
    render () {
        return(
            <Div>
                <Title title="Things to buy" />
                <Div>
                    {this.state.listArray.map((item, index) => (
                        <Div2 key={"div"+item}>
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
                            onAdd={this.addItemToListArray}></NewItem>
              
            </Div>
        );
    }
    // componentDidMount() {
    //     setInterval(this.removeItemFromListArray, 1000);
    //    }
}
    



