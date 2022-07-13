function App() {
  const title = 'Blog Post';
  const body = 'This is my blog post';
  const comments = [
    { id: 1, text: 'Comment on one' },
    { id: 2, text: 'Comment on two' },
    { id: 3, text: 'Comment on three' },
    { id: 4, text: 'Comment on four' },
    { id: 5, text: 'Comment on five' },
    { id: 6, text: 'Comment on six' },
  ];

  const loading = false;
  const showComments = true;

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {showComments && (
        <div className="comments">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
