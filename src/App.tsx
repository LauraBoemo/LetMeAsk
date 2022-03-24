import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext'
import { AdminRoom } from './pages/AdminRoom';

function App() {
  return (
    <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/rooms/new">
              <NewRoom />
            </Route>
            <Route path="/rooms/:id">
              <Room />
            </Route>
            <Route path="/admin/rooms/:id">
              <AdminRoom />
            </Route>
          </Switch>
        </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;