import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import {Contact} from "./Components/Contact";
import {Document} from "./Components/Docs";
import {Tutorial} from "./Components/Tutorial";

export const Router = () => {
    return(
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/docs' element={<Document />} />
        <Route path='/tutorial' element={<Tutorial />} />
    </Routes>
    )
}