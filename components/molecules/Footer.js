import Link from 'next/link'
import React from 'react'
import styled from 'styled-components';
import SocialMedia from'../atoms/SocialMedia'


const Section = styled.section`
padding: 1em;
padding-left:13em;
margin: auto;
background-color: #5A6D96;
border-top: 1px solid #d8d8d8;
`;
const Div = styled.div`
/* padding: 1em; */
margin-left: 5em;
display: inline-block;
`;
const P = styled.p`
font-size: .75em;
text-aliign: center;
color: #A49E8D;

`;

const Footer = () => (
<Section>
    <Div>
        
        <Div>
            <P>
                © 2018 ToDoLists. All Rights Reserved.
            </P>
        </Div>
        <Div>
            <SocialMedia />
        </Div>
        {/* <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
        <Div>
            <P>
                Created by: Brent Clark & Chad Lofgren
            </P>
        </Div>
    </Div>
</Section>
)

export default Footer