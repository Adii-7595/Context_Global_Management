import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { ThemeToggle } from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <ThemeToggle />
          <p>Try clicking the button above to toggle the theme!</p>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;