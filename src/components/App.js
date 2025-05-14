
import React from "react";
import './../styles/App.css';
import {useDispatch, useSelector} from 'react-redux'
import {fetchApi} from '../redux/loremSlice.js'

const App = () => {
  const dispatch = useDispatch()
  const lorem = useSelector(state => state.lorem)
  console.log(lorem)

  React.useEffect(()=>{
    dispatch(fetchApi())
  }, [])

  if(lorem.isLoading) return <h2>Loading...</h2>

  return (
    <div>
        <h1 style={{textAlign: "center"}}>A short Narration of Lorem Ipsum</h1>
        <p style={{textAlign: "center"}}>Below contains a title and body</p>
        <div className="container">
          {
            lorem.data.length > 0 && lorem.data.map(text => {
            return (
            <div key={text.id} className="card">
              <p><strong>Title</strong>:{text.title}</p> 
              <p><strong>Body</strong>:{text.body}</p>
            </div>
          )
          })
          }
        </div>

    </div>
  )
}

export default App
