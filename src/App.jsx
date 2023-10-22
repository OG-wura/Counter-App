
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CounterPage from './components/counterPage';
import HomePage from './components/HomePage';
import Navbar from './components/NavBar';
import { ErrorBoundaryTestPage } from './components/ErrorBoundaryTestPage';
import TestPage from './components/TestPage';

const App = () => {
  return (
    <Router>
      <ErrorBoundaryTestPage>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/counter' element={<CounterPage />} />
            <Route
              path='/test'
              element={
                <ErrorBoundaryTestPage>
                  <TestPage />
                </ErrorBoundaryTestPage>
              }
            />
          </Routes>
        </div>
      </ErrorBoundaryTestPage>
    </Router>
  );
};



export default App;
