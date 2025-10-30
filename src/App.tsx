import TransparentButton from './Components/TransparentButton/TransparentButton'
import './App.css'
import Container from "./Components/Container/Container.tsx";
import styled from "styled-components";
import TransparentContainer from "./Components/TransparentContainer/TransparentContainer.tsx";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 16px;
`

function App() {
    return (
        <>
            <Main>
                <Container>
                    <TransparentContainer className={'main-container'}>

                        <TransparentButton color={"Red"}>Россия</TransparentButton>
                        <TransparentButton color={"Blue"}>Россия</TransparentButton>
                        <TransparentButton color={"White"}>Россия</TransparentButton>
                        <TransparentButton color={"Red"}>Россия</TransparentButton>
                    </TransparentContainer>
                </Container>
            </Main>

        </>
    )
}

export default App
