import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home";
import { EvaluatorProvider } from "./context/EvaluatorContext";

function App() {
  return (
    <EvaluatorProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact={true} element={<Home />}></Route>
        </Routes>
      </Router>
    </EvaluatorProvider>
  );
}

export default App;
