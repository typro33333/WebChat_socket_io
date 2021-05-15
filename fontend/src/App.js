import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/routes';
import Navigation from './component/nav/nav'
function App() {
  return (
    <Router>
      <Navigation/>
      <Routes/>
    </Router>
  );
}

export default App;
