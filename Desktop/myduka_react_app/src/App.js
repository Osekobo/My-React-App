// import logo from './logo.svg';
// import Index from "./components/Index";
// import Home from "./components/Home";
// import Products from "./components/Products";
// import Sales from "./components/Sales";
// import Footer from "./components/Footer";
// import Register from "./components/Register";
// import Login from "./components/Login";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <Index></Index>
//       <Home></Home>
//       <Products></Products>
//       <Sales></Sales>
//       <Login></Login>
//       <Register></Register>
//       <Footer></Footer>
//     </div>
//   );
// }



import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Index from "./pages/Indexo";
// import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
