# TRICORE - Triathlon Training Tracker

## Project Overview
A triathlon training tracker app showcasing Highcharts React v4 with a distinctive "Stronger" visual design theme. Tracks swim, bike, and run workouts, displays training analytics, with planned Strava/Garmin integration and AI coaching features.

## Tech Stack
- **Frontend:** React 18 + Vite
- **UI Library:** Material UI (MUI) v6
- **Charts:** Highcharts v12 + @highcharts/react v4 (component-based API)
- **Routing:** React Router v6
- **Planned:** Supabase (database), Vercel (hosting), Claude API (coaching)

## Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure
```
src/
├── components/
│   ├── charts/           # Highcharts components
│   │   ├── ChartTheme.js         # Global Highcharts theme
│   │   ├── VolumeChart.jsx       # Stacked column (weekly volume)
│   │   ├── PaceTrendChart.jsx    # Spline (pace over time)
│   │   ├── HRZonesChart.jsx      # Donut/pie (HR zones)
│   │   └── TrainingLoadChart.jsx # Area spline (TSS)
│   ├── common/           # Reusable UI components
│   ├── dashboard/        # Dashboard-specific components
│   ├── layout/           # Header, Layout wrapper
│   └── workouts/         # Workout list components
├── pages/                # Route pages (Dashboard, Workouts, Races, Analytics)
├── services/mockData.js  # Sample data (replace with Supabase later)
├── utils/                # formatters.js, constants.js
├── theme/theme.js        # MUI theme configuration
└── styles/globals.css    # Global styles, fonts
```

## Design System ("Stronger" Theme)

### Colors
- Primary accent: `#EEFB13` (lime/yellow)
- Background: `#e3e3df` (warm gray)
- Text/borders: `#000` (black)
- Secondary: `#3d3d3d` (dark gray)
- Muted: `#888` (gray)

### Typography
- Body: `Hind` (weights 300-700)
- Headings: `Vazirmatn` (weights 300-700)

### Design Patterns
- Sharp corners everywhere (`borderRadius: 0`)
- 2px solid black borders on cards
- Circular action buttons with hover invert (lime → black)
- Border-bottom accent animation on hover (lime bar expands)
- Large decorative background text ("LOG", "VOL", "DATA", "RACE")

## Code Style
- Use ES modules (import/export)
- Functional components with hooks only
- Destructure imports when possible
- Follow MUI sx prop patterns for styling
- Use theme colors from theme.js, not hardcoded values
- SVG icons for disciplines (no emojis)

## Highcharts Implementation (IMPORTANT)

All charts use HighchartsReact with options objects:

```jsx
import HighchartsReact from '@highcharts/react';
import Highcharts from 'highcharts';
import './ChartTheme'; // Apply global theme

export default function MyChart({ data }) {
  const options = {
    chart: { type: 'column', height: 300 },
    title: { text: 'Chart Title' },
    xAxis: { categories: ['A', 'B', 'C'] },
    yAxis: { title: { text: 'Value' } },
    series: [
      { name: 'Series 1', data: [1, 2, 3], color: '#000' },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
```

### Key points:
- Import `Highcharts` from `'highcharts'` and `HighchartsReact` from `'@highcharts/react'`
- Build complete `options` object with all chart config
- Import `ChartTheme.js` to apply global theme via `Highcharts.setOptions()`
- See existing chart components for patterns: VolumeChart, PaceTrendChart, HRZonesChart, TrainingLoadChart

## Important Configuration Notes

### Vite Config (vite.config.js)
Must include `resolve.dedupe` to fix React hook errors:
```javascript
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})
```

### MUI Grid v2
MUI v6 uses Grid v2 with different props. Current code may show warnings for `item`, `xs`, `md` props - these need migration to new Grid syntax.

### Highcharts License
Commercial use requires a license. Free for demos/personal projects.

## Current Implementation Status

### ✅ Completed
- **Dashboard page** (front page at `/`) with:
  - Hero section with workout count and duration stats
  - Quick stats cards (distance, time, workouts, avg effort)
  - Recent workouts list (6 most recent)
  - Discipline volume bars (swim/bike/run)
  - **All analytics charts** (volume, pace trends, HR zones, training load)
- **Workouts page** with full workout list
- **Races page** with upcoming races
- **Analytics page** (standalone, but charts now also on dashboard)
- **Filter system**: DisciplineFilter, DateRangeFilter, FilterBar components
- **useWorkoutData hook** - central state management for filtering, highlights, chart data
- **Interactive charts**: week selection (VolumeChart), hover sync (workouts ↔ pace chart)
- **Reusable components**: CircleButton, StatCard, SectionHeader, WorkoutCard, DisciplineBar
- **SVG discipline icons** (swim, bike, run)
- **Global Highcharts theme** matching design system

### 🔲 Next Steps (Priority Order)

**Phase 1: Polish & UX** ✅ Interactivity complete
- Fix MUI Grid v2 warnings (`item`, `xs`, `md` props)
- Add loading states for charts
- Responsive layout improvements
- Empty state designs

**Phase 2: Deployment**
- Initialize Git, push to GitHub (github.com/hsasksol/tricore)
- Connect to Vercel

**Phase 3: Supabase**
- Tables: profiles, workouts, races
- Row Level Security (RLS)
- Authentication
- Replace mockData with queries

**Phase 4: Integrations**
- Strava OAuth (Vercel serverless)
- Activity sync
- GPX file upload
- Garmin Connect (requires API approval)

**Phase 5: AI Coaching**
- Post-workout analysis (Claude API)
- Natural language workout entry
- Training load warnings
- Race pacing strategy

## Planned Database Schema (Supabase)
```sql
-- Profiles
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  display_name TEXT,
  units TEXT DEFAULT 'metric',
  strava_athlete_id TEXT,
  strava_access_token TEXT,
  strava_refresh_token TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Workouts
CREATE TABLE workouts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  discipline TEXT NOT NULL CHECK (discipline IN ('swim', 'bike', 'run', 'brick', 'strength', 'rest')),
  source TEXT DEFAULT 'manual',
  external_id TEXT,
  title TEXT,
  date DATE NOT NULL,
  duration_seconds INTEGER,
  distance_meters NUMERIC,
  avg_heart_rate INTEGER,
  max_heart_rate INTEGER,
  avg_pace_seconds INTEGER,
  elevation_gain_meters NUMERIC,
  perceived_effort INTEGER CHECK (perceived_effort BETWEEN 1 AND 10),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Races
CREATE TABLE races (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  name TEXT NOT NULL,
  race_type TEXT CHECK (race_type IN ('sprint', 'olympic', 'half-ironman', 'ironman', 'other')),
  date DATE NOT NULL,
  status TEXT DEFAULT 'planned',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Constants Reference

### Disciplines (from constants.js)
- swim, bike, run, brick, strength, rest

### Race Types
- sprint: 750m swim, 20km bike, 5km run
- olympic: 1500m swim, 40km bike, 10km run
- half-ironman: 1900m swim, 90km bike, 21.1km run
- ironman: 3800m swim, 180km bike, 42.2km run

## Do Not
- Use emojis for discipline icons (use SVG from DisciplineIcon.jsx)
- Use borderRadius > 0 on cards/buttons
- Add external CSS frameworks (use MUI + globals.css)
- Use Highcharts v3 API patterns
- Hardcode colors outside theme system

## Reference Links
- Highcharts React v4: https://www.highcharts.com/docs/react/getting-started
- Highcharts API: https://api.highcharts.com/highcharts/
- MUI Docs: https://mui.com/
- Supabase: https://supabase.com/docs
