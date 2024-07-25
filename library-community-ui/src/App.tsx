import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<h1>Homepage!</h1>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
