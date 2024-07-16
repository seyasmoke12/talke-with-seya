import './App.css';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
const dotenv = require('dotenv')
dotenv.config()

function App() {
  return (
    <>
      <Sidebar/>
      <Main/>
    </>
  );
}
export default App;
