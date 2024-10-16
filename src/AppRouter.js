import { Routes, Route } from 'react-router-dom';
import {Contact} from "./Components/Contact";
import {Document} from "./Components/Docs";
import {Tutorial} from "./Components/Tutorial";
import { Home } from './Components/Home';

export const Router = () => {
    return(
    <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/docs' element={<Document />} />
        <Route path='/tutorial' element={<Tutorial />} />
    </Routes>
    )
}