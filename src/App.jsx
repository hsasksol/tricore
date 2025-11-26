import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import WorkoutsPage from './pages/WorkoutsPage';
import RacesPage from './pages/RacesPage';
import AnalyticsPage from './pages/AnalyticsPage';
import { mockWorkouts } from './services/mockData';

export default function App() {
  const [customWorkouts, setCustomWorkouts] = useState(() => {
    const saved = localStorage.getItem('tricoreWorkouts');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tricoreWorkouts', JSON.stringify(customWorkouts));
  }, [customWorkouts]);

  const handleAddWorkout = (workout) => {
    setCustomWorkouts((prev) => [workout, ...prev]);
  };

  const allWorkouts = [...customWorkouts, ...mockWorkouts];

  return (
    <BrowserRouter basename="/tricore">
      <Layout onAddWorkout={handleAddWorkout}>
        <Routes>
          <Route path="/" element={<DashboardPage workouts={allWorkouts} />} />
          <Route path="/workouts" element={<WorkoutsPage workouts={allWorkouts} />} />
          <Route path="/races" element={<RacesPage />} />
          <Route path="/analytics" element={<AnalyticsPage workouts={allWorkouts} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}