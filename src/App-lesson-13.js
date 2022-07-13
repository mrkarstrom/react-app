import Header from './components/Header';

function App() {
  return (
    <>
    {/* Use defaultProps in Header.jsx if there is nothing to send */}
      <Header text= "Vue Mastery" bgColor='red' textColor='blue'/>  
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  );
}

export default App;
