import './App.css';
import Navbar from  './Components/Navbar';
import  AddPlaylist  from './Components/AddPlaylist';
import AllPlaylists from './Components/AllPlaylists';
import  EditPlaylist  from './Components/EditPlaylist';
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={AllPlaylists} exact />
        <Route path="/all" component={AllPlaylists} exact />
        <Route path="/add" component={AddPlaylist} exact />
        <Route path="/edit/:id" component={EditPlaylist} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
