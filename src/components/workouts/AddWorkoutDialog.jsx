import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Slider,
  Typography,
} from '@mui/material';
import DisciplineIcon from '../common/DisciplineIcon';

const disciplines = ['swim', 'bike', 'run', 'brick', 'strength', 'rest'];

export default function AddWorkoutDialog({ open, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    discipline: 'run',
    title: '',
    date: new Date().toISOString().split('T')[0],
    duration: '',
    distance: '',
    avgHeartRate: '',
    avgPace: '',
    elevationGain: '',
    perceivedEffort: 5,
    notes: '',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Convert form data to match mockData format
    const workout = {
      id: `temp-${Date.now()}`,
      discipline: formData.discipline,
      title: formData.title || `${formData.discipline.charAt(0).toUpperCase() + formData.discipline.slice(1)} Workout`,
      date: formData.date,
      duration: formData.duration ? parseInt(formData.duration) * 60 : null,
      distance: formData.distance ? parseFloat(formData.distance) * 1000 : null,
      avgHeartRate: formData.avgHeartRate ? parseInt(formData.avgHeartRate) : null,
      avgPace: formData.avgPace ? parseInt(formData.avgPace) * 60 : null,
      elevationGain: formData.elevationGain ? parseFloat(formData.elevationGain) : null,
      perceivedEffort: formData.perceivedEffort,
      notes: formData.notes || null,
    };
    
    onAdd(workout);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      discipline: 'run',
      title: '',
      date: new Date().toISOString().split('T')[0],
      duration: '',
      distance: '',
      avgHeartRate: '',
      avgPace: '',
      elevationGain: '',
      perceivedEffort: 5,
      notes: '',
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontFamily: 'Vazirmatn', fontWeight: 600 }}>
        Add Workout
      </DialogTitle>
      
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, pt: 1 }}>
          {/* Discipline Selector */}
          <Box>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Discipline
            </Typography>
            <ToggleButtonGroup
              value={formData.discipline}
              exclusive
              onChange={(e, val) => val && handleChange('discipline', val)}
              sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, '& .MuiToggleButtonGroup-grouped': { border: '1px solid #000', borderRadius: 0 } }}
            >
              {disciplines.map((disc) => (
                <ToggleButton
                  key={disc}
                  value={disc}
                  sx={{
                    px: 2,
                    py: 1,
                    flex: '1 1 calc(33.333% - 12px)',
                    minWidth: '90px',
                    border: '1px solid #000 !important',
                    borderRadius: '0 !important',
                    '&.Mui-selected': {
                      bgcolor: 'primary.main',
                      color: '#000',
                      border: '1px solid #000 !important',
                      '& svg': { color: '#000' },
                      '&:hover': { bgcolor: 'primary.main' },
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <DisciplineIcon discipline={disc} size={18} />
                    {disc.charAt(0).toUpperCase() + disc.slice(1)}
                  </Box>
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

          {/* Title & Date */}
          <TextField
            label="Workout Title (optional)"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            fullWidth
            sx={{
              '& .MuiInputLabel-root': { color: '#000' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#000' },
                '&:hover fieldset': { borderColor: '#000' },
                '&.Mui-focused fieldset': { borderColor: '#000' },
              },
            }}
          />

          <TextField
            label="Date"
            type="date"
            value={formData.date}
            onChange={(e) => handleChange('date', e.target.value)}
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{
              '& .MuiInputLabel-root': { color: '#000' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#000' },
                '&:hover fieldset': { borderColor: '#000' },
                '&.Mui-focused fieldset': { borderColor: '#000' },
              },
            }}
          />

          {/* Duration & Distance */}
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <TextField
              label="Duration (minutes)"
              type="number"
              value={formData.duration}
              onChange={(e) => handleChange('duration', e.target.value)}
              sx={{
                '& .MuiInputLabel-root': { color: '#000' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#000' },
                  '&:hover fieldset': { borderColor: '#000' },
                  '&.Mui-focused fieldset': { borderColor: '#000' },
                },
              }}
            />
            <TextField
              label={`Distance (${formData.discipline === 'swim' ? 'm' : 'km'})`}
              type="number"
              step="0.1"
              value={formData.distance}
              onChange={(e) => handleChange('distance', e.target.value)}
              sx={{
                '& .MuiInputLabel-root': { color: '#000' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#000' },
                  '&:hover fieldset': { borderColor: '#000' },
                  '&.Mui-focused fieldset': { borderColor: '#000' },
                },
              }}
            />
          </Box>

          {/* Heart Rate & Pace */}
          {formData.discipline !== 'rest' && formData.discipline !== 'strength' && (
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              <TextField
                label="Avg Heart Rate (bpm)"
                type="number"
                value={formData.avgHeartRate}
                onChange={(e) => handleChange('avgHeartRate', e.target.value)}
                sx={{
                  '& .MuiInputLabel-root': { color: '#000' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#000' },
                    '&:hover fieldset': { borderColor: '#000' },
                    '&.Mui-focused fieldset': { borderColor: '#000' },
                  },
                }}
              />
              <TextField
                label="Avg Pace (min/km)"
                type="number"
                step="0.1"
                value={formData.avgPace}
                onChange={(e) => handleChange('avgPace', e.target.value)}
                sx={{
                  '& .MuiInputLabel-root': { color: '#000' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#000' },
                    '&:hover fieldset': { borderColor: '#000' },
                    '&.Mui-focused fieldset': { borderColor: '#000' },
                  },
                }}
              />
            </Box>
          )}

          {/* Elevation */}
          {(formData.discipline === 'bike' || formData.discipline === 'run') && (
            <TextField
              label="Elevation Gain (m)"
              type="number"
              value={formData.elevationGain}
              onChange={(e) => handleChange('elevationGain', e.target.value)}
              fullWidth
              sx={{
                '& .MuiInputLabel-root': { color: '#000' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#000' },
                  '&:hover fieldset': { borderColor: '#000' },
                  '&.Mui-focused fieldset': { borderColor: '#000' },
                },
              }}
            />
          )}

          {/* Perceived Effort */}
          <Box>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Perceived Effort: {formData.perceivedEffort}/10
            </Typography>
            <Slider
              value={formData.perceivedEffort}
              onChange={(e, val) => handleChange('perceivedEffort', val)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{
                '& .MuiSlider-thumb': { bgcolor: 'primary.main' },
                '& .MuiSlider-track': { bgcolor: 'primary.main' },
              }}
            />
          </Box>

          {/* Notes */}
          <TextField
            label="Notes (optional)"
            value={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            multiline
            rows={3}
            fullWidth
            sx={{
              '& .MuiInputLabel-root': { color: '#000' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#000' },
                '&:hover fieldset': { borderColor: '#000' },
                '&.Mui-focused fieldset': { borderColor: '#000' },
              },
            }}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2.5, pt: 1 }}>
        <Button onClick={handleClose} sx={{ color: '#000', border: '1px solid #000', borderRadius: 0 }}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            bgcolor: 'primary.main',
            color: '#000',
            border: 'none',
            boxShadow: 'none',
            borderRadius: 0,
            '&:hover': { bgcolor: '#000', color: 'primary.main', boxShadow: 'none' },
          }}
        >
          Add Workout
        </Button>
      </DialogActions>
    </Dialog>
  );
}
