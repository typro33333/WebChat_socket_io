import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/routes';
import { Provider } from "react-redux";
import store from './redux/store/store';

function App() {
  return (
  <Provider store={store}>
    <Router>
      <Routes/>
    </Router>
  </Provider>
  );
}

export default App;
