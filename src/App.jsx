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
    try {
      const saved = localStorage.getItem('tricoreWorkouts');
      if (!saved) return [];
      
      const parsed = JSON.parse(saved);
      // Validate it's an array and filter out invalid entries
      if (!Array.isArray(parsed)) return [];
      
      return parsed.filter(workout => 
        workout && 
        typeof workout.id === 'string' &&
        typeof workout.discipline === 'string' &&
        ['swim', 'bike', 'run', 'brick', 'strength', 'rest'].includes(workout.discipline)
      );
    } catch (error) {
      console.error('Failed to load workouts from localStorage:', error);
      return [];
    }
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