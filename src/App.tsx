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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                </div>
            </TransparentContainer>
        </Container>
    );
}

export default App;
