import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import 'react-bootstrap';

import AddTutorial from "./component/add-tutorial.component";
import Tutorial from "./component/tutorial.component";
import TutorialList from "./component/tutorial-list.component";
function App() {
  return (
    <>
      <Router>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <Link to={"/tutorial"} className='navbar-brand'>
            Fereshteh
          </Link>
          <div className='navbar mr-auto'>
            <li className='nav-item'>
              <Link to={'/tutorials'} className='nav-link'>
                Tutorials</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/tutorials'} className='nav-link'>
                Tutorials</Link>
            </li>
          </div>
          <div>Hi Fereshteh</div>
        </nav>
        <div className='container mt-3'>
          <Routes>
            <Route path="/" element={<TutorialList />} />
            <Route path="tutorials" element={<TutorialList />} />
            <Route path="/add" element={<AddTutorial />} />
            <Route path="/tutorials/:id" element={<Tutorial />} />
          </Routes>
        </div>

      </Router>

    </>
  );
}

export default App;
