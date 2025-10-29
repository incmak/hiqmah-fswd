export default function Star({ color, onClick }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='30'
      viewBox='0 0 51 48'
      onClick={onClick}
    >
      <path
        fill={color || 'none'}
        stroke={color || '#000'}
        d='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z'
      />
    </svg>
  );
}
