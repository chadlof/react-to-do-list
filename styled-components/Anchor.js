import styled from 'styled-components';

 const Anchor = styled.a`
 text-align: center;
 padding: 1em;
 margin-left: 1em;
 color: #A49E8D;

 &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &:active {
    color: #FF9244;
  }
`;
 
export default Anchor