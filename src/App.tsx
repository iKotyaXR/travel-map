import './App.css';
import Container from './Components/Container/Container.tsx';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Countries from './Components/pages/Countries/Contries.tsx';
import Map from './Components/pages/Map/Map.tsx';
import Stats from './Components/pages/Stats/Stats.tsx';

function App() {
    return (
        <Container>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Countries />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/stats" element={<Stats />} />
                </Routes>
            </HashRouter>
        </Container>
    );
}

export default App;
