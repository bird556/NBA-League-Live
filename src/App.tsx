import { ThemeProvider } from '@/components/theme-provider';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ModeToggle } from './components/mode-toggle';
import HeaderScores from './components/HeaderScores';
import LeagueLeaders from './components/Header/LeagueLeaders/LeagueLeaders';
function App() {
  return (
    <div className="relative">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <div className="relative min-h-screen transition delay-150 duration-300">
            {' '}
            {/* Sticky Header */}
            <div className="sticky top-0 z-50 w-full">
              {' '}
              {/* Added z-50 and w-full */}
              <HeaderScores />
            </div>
            {/* Main Content */}
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            {/* Mode Toggle */}
            {/* <div className="fixed bottom-10 left-10">
              <ModeToggle />
            </div> */}
            <LeagueLeaders />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
