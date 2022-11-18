import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import UserList from './components/UserList';


function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Container fluid className="p-2"> 
              <Navbar.Brand href="#home">Bootstrap</Navbar.Brand>
      </Container>
    </Navbar>
    <UserList />
    </div>
  );
}

export default App;
