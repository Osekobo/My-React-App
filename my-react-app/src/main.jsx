import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// creating a class:
class Car {
  constructor(name) {
    this.brand = name;
  }
}

const mycar = new Car("Ford");
document.write(mycar.brand);

// cd my-react-app
// npm run dev
// code .
// install vite: npm install -g create-vite
// to create a React application named my-react-app: npm create vite@latest my-react-app -- --template react
// createRoot(document.getElementById('root')).render(-----)  

// Arrow functions: This works only if the function has only one statement.
// hello = function() {
//   return "Hello World!";  =>  hello = () => "Hello World!";
// }