import { createRoot } from 'react-dom/client'
import App from './App';
import StockSearchBar from './Components/StockSearchBar';
import "bootstrap/dist/css/bootstrap.min.css"
import HowTo from './Components/HowTo';
import SpecialChars from './Components/SpecialChars'


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <>
    <App />
    <StockSearchBar />
    <HowTo />
    <SpecialChars />
  </>  
);
