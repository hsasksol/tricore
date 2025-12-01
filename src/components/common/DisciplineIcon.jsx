export const SwimIcon = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="Swim icon"
    {...props}
  >
    <path d="M2 12c1.5 0 2.5 1 3.5 1s2-1 3.5-1 2.5 1 3.5 1 2-1 3.5-1 2.5 1 3.5 1" />
    <path d="M2 18c1.5 0 2.5 1 3.5 1s2-1 3.5-1 2.5 1 3.5 1 2-1 3.5-1 2.5 1 3.5 1" />
    <circle cx="16" cy="6" r="2" />
    <path d="M12 12V8l-3 2" />
  </svg>
);

export const BikeIcon = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="Bike icon"
    {...props}
  >
    <circle cx="5.5" cy="17.5" r="3.5" />
    <circle cx="18.5" cy="17.5" r="3.5" />
    <path d="M12 17.5V14l-3-3 4-3 2 3h3" />
  </svg>
);

export const RunIcon = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="Run icon"
    {...props}
  >
    <circle cx="14" cy="4" r="2" />
    <path d="M6 21l3-9" />
    <path d="M9 12l-2-3 5-2 3 3" />
    <path d="M14 21l-2-6 3-3" />
  </svg>
);

export const DISCIPLINE_ICONS = {
  swim: SwimIcon,
  bike: BikeIcon,
  run: RunIcon,
};

export default function DisciplineIcon({ discipline, size = 18, color }) {
  const Icon = DISCIPLINE_ICONS[discipline];
  
  if (!Icon) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'}>
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
      </svg>
    );
  }
  
  return <Icon width={size} height={size} style={{ color }} />;
}
