import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/index';
import Home from './components/Home/index';
import React, { useState, useEffect } from 'react';
import SizeWarningOverlay from './SizeWarningOverlay';

function App() {
  const [isSizeWarningVisible, setIsSizeWarningVisible] = useState(false);

    useEffect(() => {
        const checkWindowSize = () => {
            const minWidth = 669;
            if (window.innerWidth < minWidth) {
                setIsSizeWarningVisible(true);
            } else {
                setIsSizeWarningVisible(false);
            }
        };

        window.addEventListener('resize', checkWindowSize);
        checkWindowSize(); // Initial check

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
      </Route>

    </Routes>
    <SizeWarningOverlay isOpen={isSizeWarningVisible} />
    </>
  );
}

export default App;
