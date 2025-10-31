import './App.css';
import Container from './Components/Container/Container.tsx';
import { Route, Routes, Navigate, HashRouter } from 'react-router-dom';
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
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </HashRouter>
        </Container>
    );
}

export default App;
