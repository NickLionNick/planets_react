  // import Bootstrap
  import 'bootstrap/dist/css/bootstrap.min.css';
  // import Bootstrap
  import {HashRouter as Router,Route,Switch} from 'react-router-dom';

  import backgroundImage from './1.png';

  import './App.css';
  import Dashboard from './components/header/Dashboard';
  import NavBar from "./components/header/NavBar";
  import Planet from "./components/planet/Planet";

  function App() {
    return (
      // page switching
     <Router>
      <div className="App" style={{background:`url(${backgroundImage})`}}>
           <NavBar />
        <div className="container">
          <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/planet/:name" component={Planet} />
           </Switch>
        </div>
      </div>
      </Router>
       // page switching
    );
  }

export default App;
