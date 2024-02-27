import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App() {
    return (<input placeholder='Hi there' />);
}

root.render(<App />);