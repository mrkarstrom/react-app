
function App() {
const title='Blog Post';
const body ='This is my blog post';
const comments = [
  {id:1, text:'Comment on one'},
  {id:2, text:'Comment on two'},
  {id:3, text:'Comment on three'}
]

  return (
    <div className='container'>
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>

      <div className="comments">
        <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li>{comment.text}</li>
            ) )} 
          </ul>
      </div>
    </div>
  )
}

export default App;
