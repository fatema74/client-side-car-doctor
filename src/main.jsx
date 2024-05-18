import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { RouterProvider } from 'react-router-dom';
import PablicRout from './Routs/PablicRout.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={PablicRout} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
