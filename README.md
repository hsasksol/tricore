# TRICORE Phase 1: Interactivity

This package adds full interactivity to the TRICORE triathlon tracker. All charts and lists now share state and respond to filters.

## What's New

### 1. Central State Hook: `useWorkoutData`
A single hook that manages:
- **Selected disciplines** (swim/bike/run toggles)
- **Date range** (7D, 30D, 90D, All)
- **Week selection** (click a chart bar to drill down)
- **Hover sync** (highlight workout ↔ chart point)
- **Derived data** (filtered workouts, chart data, stats)

### 2. Filter Components
- `DisciplineFilter` — Toggle chips for swim/bike/run
- `DateRangeFilter` — Segmented button for time range
- `FilterBar` — Combined component with week selection indicator

### 3. Interactive Charts
- `VolumeChart` — Click any week bar to filter to that week
- `PaceTrendChart` — Hover sync with workout cards

### 4. Extended Mock Data
60+ workouts spanning ~3 months for meaningful filtering.

---

## File Structure

```
tricore-interactivity/
├── hooks/
│   └── useWorkoutData.js      # Central state management
├── components/
│   ├── DisciplineFilter.jsx   # Discipline toggles
│   ├── DateRangeFilter.jsx    # Date range buttons
│   ├── FilterBar.jsx          # Combined filter bar
│   ├── charts/
│   │   ├── ChartTheme.js
│   │   ├── VolumeChart.jsx    # With click-to-filter
│   │   ├── PaceTrendChart.jsx # With hover sync
│   │   ├── HRZonesChart.jsx
│   │   └── TrainingLoadChart.jsx
│   ├── common/
│   │   ├── CircleButton.jsx
│   │   ├── DisciplineIcon.jsx
│   │   ├── SectionHeader.jsx
│   │   └── StatCard.jsx
│   ├── dashboard/
│   │   └── DisciplineBar.jsx
│   └── workouts/
│       └── WorkoutCard.jsx    # With hover highlight
├── pages/
│   ├── DashboardPage.jsx      # Updated with filters
│   └── AnalyticsPage.jsx      # Updated with interactions
├── services/
│   └── mockData.js            # Extended dataset
└── utils/
    ├── constants.js
    └── formatters.js
```

---

## Integration Steps

### 1. Copy files to your project
Copy the folders into your `src/` directory, merging with existing structure:
- `hooks/` — New folder
- `components/` — Merge with existing
- `pages/` — Replace DashboardPage and AnalyticsPage
- `services/mockData.js` — Replace existing
- `utils/` — Merge with existing

### 2. Update imports in pages
The new pages use these import paths:
```jsx
import useWorkoutData from '../hooks/useWorkoutData';
import FilterBar from '../components/common/FilterBar';
// ... etc
```

Adjust paths based on your folder structure.

### 3. Fix component imports
The filter components need access to `DisciplineIcon`. Ensure the import path is correct:
```jsx
// In DisciplineFilter.jsx
import { DISCIPLINE_ICONS } from './DisciplineIcon';
// or
import { DISCIPLINE_ICONS } from '../common/DisciplineIcon';
```

---

## How It Works

### Filter Flow
```
User clicks "Bike" toggle
  ↓
toggleDiscipline('bike') called
  ↓
selectedDisciplines state updates
  ↓
filteredWorkouts recomputes (useMemo)
  ↓
volumeChartData, paceTrendData, etc. recompute
  ↓
All components re-render with new data
```

### Chart Click Flow
```
User clicks Week 3 bar in VolumeChart
  ↓
onWeekClick(2, weekNumbers) called
  ↓
handleWeekClick sets selectedWeek = 3
  ↓
filteredWorkouts filters to Week 3 only
  ↓
Workout list shows only Week 3 workouts
  ↓
Week chip appears in FilterBar
  ↓
User clicks X to clear selection
```

### Hover Sync Flow
```
User hovers WorkoutCard
  ↓
onMouseEnter → setHighlightedWorkoutId(workout.id)
  ↓
PaceTrendChart receives highlightedWorkoutId
  ↓
useEffect finds matching point, calls point.setState('hover')
  ↓
Chart point highlights with yellow ring
  ↓
User moves mouse away
  ↓
onMouseLeave → setHighlightedWorkoutId(null)
  ↓
All points return to normal state
```

---

## Key Code Patterns

### Using the Hook
```jsx
const {
  // State
  selectedDisciplines,
  dateRange,
  selectedWeek,
  highlightedWorkoutId,
  
  // Actions
  toggleDiscipline,
  setDateRange,
  handleWeekClick,
  clearWeekSelection,
  setHighlightedWorkoutId,
  
  // Derived Data
  filteredWorkouts,
  stats,
  volumeChartData,
  paceTrendData,
  hrZonesData,
  trainingLoadData,
} = useWorkoutData(mockWorkouts);
```

### Passing to Charts
```jsx
<VolumeChart
  data={volumeChartData}
  onWeekClick={handleWeekClick}
  selectedWeek={selectedWeek}
/>

<PaceTrendChart
  data={paceTrendData}
  highlightedWorkoutId={highlightedWorkoutId}
  onPointHover={setHighlightedWorkoutId}
/>
```

### Passing to WorkoutCard
```jsx
<WorkoutCard
  workout={workout}
  onMouseEnter={() => setHighlightedWorkoutId(workout.id)}
  onMouseLeave={() => setHighlightedWorkoutId(null)}
  highlighted={highlightedWorkoutId === workout.id}
/>
```

---

## Customization

### Add More Disciplines
In `useWorkoutData.js`:
```js
const DISCIPLINE_FILTERS = ['swim', 'bike', 'run', 'strength'];
```

### Change Date Ranges
```js
const DATE_RANGES = {
  '7D': 7,
  '14D': 14,
  '30D': 30,
  '90D': 90,
  'ALL': null,
};
```

### Adjust HR Zone Thresholds
In `useWorkoutData.js`, modify the `hrZonesData` useMemo:
```js
if (hr < 110) zones.zone1 += duration;      // Recovery
else if (hr < 130) zones.zone2 += duration; // Endurance
else if (hr < 150) zones.zone3 += duration; // Tempo
else if (hr < 165) zones.zone4 += duration; // Threshold
else zones.zone5 += duration;                // VO2max
```

---

## Next Steps (Phase 2)

With interactivity complete, you're ready for:
1. **Git init** and push to GitHub
2. **Vercel deployment** for live preview
3. **Supabase integration** to replace mock data with real database

The hook is designed to easily swap `mockWorkouts` for a Supabase query result.
