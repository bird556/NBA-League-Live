import { ThemeProvider } from '@/components/theme-provider';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ModeToggle } from './components/mode-toggle';
import HeaderScores from './components/HeaderScores';
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <HeaderScores />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <div className="fixed bottom-10 left-10">
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
