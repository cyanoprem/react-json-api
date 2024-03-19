import { useState } from "react"
import Post from "./components/Post"
import Navbar from "./components/Navbar"

const App = () => {
  const [number, setNumber] = useState('')
  const [allPosts, setAllPosts] = useState([])


  const saveNumber = (event) => {
    setNumber(event.target.value)
  }

  const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await response.json()
    const requiredData = data.map((item) => {
      return {
        id: item.id,
        title: item.title,
        photo: item.url
      }
    })
    const requiredPosts = []
    for (let i = 0; i < number; i++) {
      requiredPosts.push(requiredData[i])
    }
    setAllPosts(requiredPosts)
    setNumber('')
  }


  return <div>
    <Navbar />

    <div id="input-area">
      <input type="text" placeholder="Enter the Number of Posts" className="input" onChange={saveNumber} value={number} />
      <button className="button is-link" id="get-button" onClick={getPosts}>GET</button>
    </div>

    <div id="all-posts">
      {
        allPosts.map((post) => {
          return <Post key={post.id} title={post.title} imageUrl={post.photo} />
        })
      }
    </div>
  </div>
}

export default App