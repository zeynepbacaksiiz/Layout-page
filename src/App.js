
import { Route,Routes } from 'react-router-dom';
import Header from "./header.js"
import Section from "./Section.js"
function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Header content={<Section/>}/>}></Route>
     </Routes>
    </>
  );
}

export default App;
