import React from 'react'
import styled from 'styled-components';
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

export const listArray = ['dog food', 'Bananas', 'Thumb Drive', 'Mouse' ];


export default () => (
    <Div>
        <Title title="Things to buy"></Title>
        {listArray.map((item) => (
            <ListItem key={item.toString()} listitem={item}></ListItem>
        ))}
        <NewItem></NewItem>
    </Div>
)