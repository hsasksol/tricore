import { Box, Card, CardContent, Typography } from '@mui/material';
import SectionHeader from '../components/common/SectionHeader';
import { mockRaces } from '../services/mockData';
import { RACE_TYPES } from '../utils/constants';

export default function RacesPage() {
  return (
    <Box>
      <Card>
        <CardContent>
          <SectionHeader title="Upcoming Races" backgroundText="RACE" />
          {mockRaces.map((race) => (
            <Box
              key={race.id}
              sx={{
                py: 2,
                borderBottom: '2px solid #000',
              }}
            >
              <Typography variant="h4" sx={{ fontSize: 20 }}>
                {race.name}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                {RACE_TYPES[race.race_type]?.label} ·{' '}
                {new Date(race.date).toLocaleDateString()}
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}