import TransparentButton from './Components/TransparentButton/TransparentButton';
import './App.css';
import Container from './Components/Container/Container.tsx';
import TransparentContainer from './Components/TransparentContainer/TransparentContainer.tsx';

function App() {
    function onClick() {
        console.log('clicked');
    }

    return (
        <Container>
            <TransparentContainer className={'main-container'}>
                <TransparentButton color={'Red'} onClick={onClick}>
                    Russia
                </TransparentButton>
                <TransparentButton color={'Blue'} onClick={onClick}>
                    Russia
                </TransparentButton>
                <TransparentButton color={'White'} onClick={onClick}>
                    Russia
                </TransparentButton>
                <TransparentButton color={'Red'} onClick={onClick}>
                    Russia
                </TransparentButton>
            </TransparentContainer>
        </Container>
    );
}

export default App;
