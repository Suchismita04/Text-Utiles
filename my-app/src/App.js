
import './App.css';
import Nbar from './component/Nbar'
import Ab from './component/Ab'
import TextForm from './component/TextForm';
import {
  BrowserRouter as
    Router,
  Link,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Nbar h="Text Utiles" />
        <Routes>
          <Route exact path='/Ab' element={<Ab />} />
          <Route exact path='/' element={<TextForm/>}/>
        </Routes>


      </Router>

    </>
  );
}

export default App;
