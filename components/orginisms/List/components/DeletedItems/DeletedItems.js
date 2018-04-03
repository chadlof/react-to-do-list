import React from 'react'
import PropTypes from 'prop-types'
import DeletedItem from '../../../../atoms/DeletedItem'
import AddItem from '../../../../atoms/AddItem'
import Title from '../../../../atoms/Title'
import styled from 'styled-components'

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


const DeletedItems = (props) => {
    const { deletedItemsArray, reAddItemToListArray } = props

    return (
        <section>
        {
            deletedItemsArray.length != 0
            ? <Title title="Deleted Items" />
            : null
        }
        <Div>
            {deletedItemsArray.map((item, index) => (
                <Div2 key={"div"+item+index}>
                    <DeletedItem deletedItem={item} />
                    <AddItem
                        className="reAdd-icon"
                        onReAdd={reAddItemToListArray}
                        index={index}
                        item={item}
                    />
                </Div2>
                
            ))}
        </Div>
        </section>
        
    )
}

DeletedItems.propTypes = {
    deletedItemsArray: PropTypes.array.isRequired,
    reAddItemToListArray: PropTypes.func.isRequired
}

export default DeletedItems