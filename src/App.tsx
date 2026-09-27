import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './components/HomePage';
import { BackgroundFX } from './components/ui/BackgroundFX';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';

export default function App() {
  return (
    <HashRouter>
      <ScrollProgress />
      <CustomCursor />
      <BackgroundFX />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
