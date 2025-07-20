import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CursorProvider } from './contexts/CursorContext';
import { Toaster } from './components/ui/toaster';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Portfolio />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
        </div>
      </CursorProvider>
    </ThemeProvider>
  );
}

export default App;