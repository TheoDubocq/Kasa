import { Routes, Route,BrowserRouter,Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css';
import RoutesPath from "./routes/RoutesPath";

function App() {
    return (
      
      <BrowserRouter>
        <Header />
			    <main>
           <RoutesPath/>
         </main>
        <Footer />
      </BrowserRouter>
    );
}

export default App;