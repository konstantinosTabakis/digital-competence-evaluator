import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import { EvaluatorProvider } from "./context/EvaluatorContext";

function App() {
  return (
    <EvaluatorProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact={true} element={<Home />}></Route>
          <Route path='/survey' exact={true} element={<Survey />}></Route>
        </Routes>
      </Router>
    </EvaluatorProvider>
  );
}

export default App;
