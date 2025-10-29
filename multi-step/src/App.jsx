import Accordion from './accordion';
import './app.css';

function App() {
  return (
    // Special prop inbuilt in every component
    // children
    <>
      <h1>sadflkjfdsa</h1>
      <Accordion
        title='What do you offer?'
        // content='Content 1'
        // emoji='🗑️'
        // emojiPosition='right'
      >
        🗑️ Content 1<h1>Hello</h1>
        <form>
          <input type='text' />
        </form>
      </Accordion>

      <Accordion title='How many days can I avail the free coupon'>
        Content 2 🎉
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Accordion>

      <Accordion title='Can I avail the free coupon multiple times'>
        🗃️ Content 3
        <img src='https://source.unsplash.com/random/300x300' />
      </Accordion>
    </>
  );
}

export default App;
