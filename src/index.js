// React must be imported in every file that uses JSX so that its in scope
import React from 'react';
// Only needed for the entry point to mount React
import ReactDOM from 'react-dom';
// our build config allows for importing CSS also
import App from './components/App';

import './styles/index.css';

// find element to mount React app to.
const container = document.getElementById('root');

if (container) ReactDOM.render(<App />, container);
