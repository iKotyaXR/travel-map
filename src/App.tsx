import TransparentButton from './Components/TransparentButton/TransparentButton';
import './App.css';
import Container from './Components/Container/Container.tsx';
import styled from 'styled-components';
import TransparentContainer from './Components/TransparentContainer/TransparentContainer.tsx';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 16px;
`;

function App() {
    return (
        <>
            <Main>
                <Container>
                    <TransparentContainer className={'main-container'}>
                        <TransparentButton color={'Red'}>Russia</TransparentButton>
                        <TransparentButton color={'Blue'}>Russia</TransparentButton>
                        <TransparentButton color={'White'}>Russia</TransparentButton>
                        <TransparentButton color={'Red'}>Russia</TransparentButton>
                    </TransparentContainer>
                </Container>
            </Main>
        </>
    );
}

export default App;
