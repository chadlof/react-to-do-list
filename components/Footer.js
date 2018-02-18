import Link from 'next/link'
import Wrapper from '../styled-components/Wrapper'
import Container from '../styled-components/Container'
import Anchor from '../styled-components/Anchor'
import Par from '../styled-components/Par'


const Footer = () => (
<Wrapper>
    <Container>
        <Container>
            <Par>
                Created by: Brent Clark & Chad Lofgren
            </Par>
        </Container>
        <Container>
            <Par>
                © 2018 To Dues. All Rights Reserved.
            </Par>
        </Container>
    </Container>
</Wrapper>
)

export default Footer