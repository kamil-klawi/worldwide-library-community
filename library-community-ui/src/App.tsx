import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';
import Login from './pages/Auth/login';
import Books from './pages/Books';
import Authors from './pages/Author';
import Translators from './pages/Translators';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Homepage />} />
                        <Route path="/authors" element={<Authors />} />
                        <Route path="/books" element={<Books />} />
                        <Route path="/translators" element={<Translators />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
