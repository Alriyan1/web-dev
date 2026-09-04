
const CreatePost = () => {
  return (
    <div>
      <section className="create-post-section">
        <h1>Create post</h1>

        <form>
            <input type="file" name="image" accept="image/*" />
            <input type="text" name="caption" placeholder="Enter Caption" required/>
            <button type="submit">Submit</button>
        </form>

      </section>
    </div>
  )
}

export default CreatePost
