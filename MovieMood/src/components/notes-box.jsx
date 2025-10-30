export default function NotesBox({ notes, setNotes }) {
  return (
    <textarea
      value={notes}
      onChange={(e) => setNotes(e.target.value)}
      rows={4}
      className='movie-notes'
    />
  );
}
