import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';

function App() {
  return (
    <>
      {/* Use defaultProps in Header.jsx if there is nothing to send */}
      <Header />
      <div className="container">
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
