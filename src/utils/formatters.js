export const formatDuration = (seconds) => {
  if (!seconds) return '--:--';
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  if (hrs > 0) return `${hrs}h ${mins}m`;
  return `${mins}m`;
};

export const formatDistance = (meters, units = 'metric') => {
  if (!meters) return '--';
  if (units === 'imperial') return `${(meters / 1609.344).toFixed(2)} mi`;
  if (meters >= 1000) return `${(meters / 1000).toFixed(1)} km`;
  return `${meters} m`;
};

export const formatPace = (secondsPerKm, discipline = 'run') => {
  if (!secondsPerKm) return '--:--';
  const mins = Math.floor(secondsPerKm / 60);
  const secs = secondsPerKm % 60;
  const unit = discipline === 'swim' ? '/100m' : '/km';
  return `${mins}:${secs.toString().padStart(2, '0')}${unit}`;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};
