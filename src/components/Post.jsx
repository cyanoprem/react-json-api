const Post = ({ title, imageUrl }) => {

  return <div className="box">
    <p id="title">{title}</p>
    <img src={imageUrl} id="img" />
  </div>
}

export default Post