export const DISCIPLINES = {
  swim: { label: 'Swim', color: '#000' },
  bike: { label: 'Bike', color: '#3d3d3d' },
  run: { label: 'Run', color: '#000' },
  brick: { label: 'Brick', color: '#3d3d3d' },
  strength: { label: 'Strength', color: '#888' },
  rest: { label: 'Rest', color: '#888' },
};

export const RACE_TYPES = {
  sprint: { label: 'Sprint', swim: 750, bike: 20000, run: 5000 },
  olympic: { label: 'Olympic', swim: 1500, bike: 40000, run: 10000 },
  'half-ironman': { label: 'Half Ironman', swim: 1900, bike: 90000, run: 21100 },
  ironman: { label: 'Ironman', swim: 3800, bike: 180000, run: 42200 },
};
