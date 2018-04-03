import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ListItem from '../../../../atoms/ListItem'
import RemoveItem from '../../../../atoms/RemoveItem'

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


const ListItems = (props) => {
    const { listArray, removeItemFromListArray } = props
    return (
        <section>
            <Div>
                {listArray.map((item, index) => (
                    <Div2 key={"div"+item+index}>
                        <ListItem listitem={item} />
                        <RemoveItem
                            className="remove-icon"
                            onRemove={removeItemFromListArray}
                            index={index}
                        />
                    </Div2>
                    
                ))}
            </Div>
        </section>
    )
}

ListItems.propTypes = {
    listArray: PropTypes.array.isRequired,
    removeItemFromListArray: PropTypes.func.isRequired
}

export default ListItems