export function Button({ children }) {
  return (
    <button
      className='btn primary-btn'
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      {children}
    </button>
  );
}
