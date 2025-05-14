
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

  if(lorem.isLoading) return <h4>Loading...</h4>

  return (
    <div>
        <h1 style={{textAlign: "center"}}>A short Naration of Lorem Ipsum</h1>
        <p style={{textAlign: "center"}}>Below contains a title and body</p>
        <div className="container">
          {
            lorem.data.length > 0 && lorem.data.map(text => {
            return (
            <li key={text.id} className="card">
              <h4><strong>Title</strong>:{text.title}</h4> 
              <p><strong>Body</strong>:{text.body}</p>
            </li>
          )
          })
          }
        </div>

    </div>
  )
}

export default App
