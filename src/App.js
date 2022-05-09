function App() {
  const title = "My blog"
  const body = "This is my blogpost"
  const comments = [
    { id: 1, text: "First Comment" },
    { id: 2, text: "Second Comment" },
    { id: 3, text: "Third Comment" },
  ]

  const loading = false
  const showComments = true

  if (loading) return <h1>Loading...</h1>

  const commentsBlock = (
    <div className="comments">
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  )


  return (
    <>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      {showComments && commentsBlock}
    </>

  )
}

export default App