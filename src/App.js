import './App.css';
import Bts from './components/User';
import { AuthProvider } from './store/AuthContext';
import TotalVotos from './components/TotalVotos';
import Individuales from './components/Individuales';
import Filtro
 from './components/Filtro';
function App() {
  return (
    <div className="App">
      <h1>Oprima para votar a su elección</h1>
      <AuthProvider>
        <Bts />
        <TotalVotos />
        <Individuales />
        <Filtro />
      </AuthProvider>
    </div>
  );
}

export default App;
