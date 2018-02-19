import Link from 'next/link'
import {Wrapper, BodyWrapper,Container, Title, Heading2, Paragraph, Anchor}from '../style'


const Footer = () => (
<Wrapper>
    <Container>
        <Container>
            <Paragraph>
                Created by: Brent Clark & Chad Lofgren
            </Paragraph>
        </Container>
        <Container>
            <Paragraph>
                © 2018 To Dues. All Rights Reserved.
            </Paragraph>
        </Container>
    </Container>
</Wrapper>
)

export default Footer