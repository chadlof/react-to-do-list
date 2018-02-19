import styled from 'styled-components';

export const MainWrapper = styled.main`
  /* display: flex;
  flex-direction: column;
  background: #fff; */
  
`;

export const Wrapper = styled.section`
padding: 1em;
margin: auto;
background-color: #5A6D96;
border-top: 1px solid #d8d8d8;

`;

export const BodyWrapper = Wrapper.extend`
background-color: #EBEDF2;
`;

export const Container = styled.div`
padding: 1em;
/* margin-left: 15em; */
display: inline-block;
`;

export const Title = styled.h1`
font-size: 1.5em;
text-aliign: center;
color: #FF9244;

`;

export const Heading2 = styled.h2`
font-size: 1.25em;
text-aliign: center;
color: #A49E8D;

`;

export const Paragraph = styled.p`
font-size: .75em;
text-aliign: center;
color: #A49E8D;

`;

export const Anchor = styled.a`
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

// export {Wrapper, BodyWrapper,Container, Title, Heading2, Paragraph, Anchor};