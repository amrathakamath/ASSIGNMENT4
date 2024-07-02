import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">My Dashboard</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" exact>
            <h1>Welcome to My Dashboard</h1>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
