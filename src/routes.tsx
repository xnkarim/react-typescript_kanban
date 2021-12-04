import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom';
import Boards from './pages/Boards';
import Settings from './pages/Settings';

export default function routes() {
    return (
        <Routes>
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Boards />} />
        </Routes>
    )
}
