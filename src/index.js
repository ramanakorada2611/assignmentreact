import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Components';
import './Second'
import { Function} from './Components';
import Change from './Second';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<h1 className='style'>Styling Using Functional and Class Components</h1>
<Function/>
<Change/>
</>
);


