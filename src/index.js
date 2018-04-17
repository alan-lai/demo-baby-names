import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import data from './data/data';
import 'normalize-css';
import './index.css';

ReactDOM.render(<App name="Alan's App" data={data} />, document.getElementById('root'));
registerServiceWorker();
