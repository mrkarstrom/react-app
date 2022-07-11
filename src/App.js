
function App() {
const title='Blog Post';
const body ='This is my blog post';

  return (
    <div className='container'>
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>
        {Math.floor(Math.random() * 6 + 1)}

    </div>
  )
}

export default App;
