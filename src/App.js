import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from "./components/Header";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Overview from "./pages/Overview";
import Results from "./pages/Results";
import { EvaluatorProvider } from "./context/EvaluatorContext";

function App() {
  return (
    <EvaluatorProvider>
      <ToastContainer />
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact={true} element={<Home />}></Route>
          <Route path='/survey' exact={true} element={<Survey />}></Route>
          <Route path='/overview' element={<Overview />}></Route>
          <Route path='/results' element={<Results />}></Route>
        </Routes>
      </Router>
    </EvaluatorProvider>
  );
}

export default App;
