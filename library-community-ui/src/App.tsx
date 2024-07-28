import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Homepage from './pages/Homepage';
import Layout from './components/Layouts/layout';
import Login from './pages/Auth/login';
import Books from './pages/Books';
import Authors from './pages/Author';
import Translators from './pages/Translators';
import Admin from './pages/Admin';
import AdminLayout from './components/Layouts/admin';
import Library from './pages/Library';
import Book from './pages/Library/Book';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Homepage />} />
                        <Route path="/books" element={<Library />} />
                        <Route path="/books/:id" element={<Book />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<Admin />} />
                        <Route path="/admin/authors" element={<Authors />} />
                        <Route path="/admin/books" element={<Books />} />
                        <Route
                            path="/admin/translators"
                            element={<Translators />}
                        />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
