import Link from 'next/link'
import Wrapper from '../styled-components/Wrapper'
import Container from '../styled-components/Container'
import Anchor from '../styled-components/Anchor'


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