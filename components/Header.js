import Link from 'next/link'
import {Wrapper, BodyWrapper,Container, Title, Heading2, Paragraph, Anchor}from '../style'


const Header = () => (
 <Wrapper>
     <Container>
        {/* <Container>
        <a><img src="..\images\box-of-icons.png" alt="Img" height="342" width="368"> </img></a>
        </Container>  */}
        <Container>
            <Link href="../">
                <Anchor>Home</Anchor>
            </Link>
            <Link href="./signUp">
                <Anchor>Sign Up</Anchor>
            </Link>
            <Link href="./signIn">
                <Anchor>Sign In</Anchor>
            </Link>
            <Link href="./lists">
                <Anchor>Lists</Anchor>
            </Link>
            <Link href="./newList">
                <Anchor>New List</Anchor>
            </Link>

        </Container>
    </Container>
</Wrapper>

)

export default Header