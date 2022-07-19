import { useState } from 'react';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      {/* Use defaultProps in Header.jsx if there is nothing to send */}
      <Header />
      <div className="container">
        <FeedbackItem />
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
