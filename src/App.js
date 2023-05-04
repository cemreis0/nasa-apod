import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"

const App = () => {

  const [loader, setLoader] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      try {
        setLoader(true)
        const {data: response} = await axios.get("http://localhost:8000/getapod")
        setData(JSON.parse(response[0]))
      } catch (error) {
        console.log(error.message)
      }
      setLoader(false)
    }
    fetchData()
  }, [])

  return (
    <div className="container">
      {loader &&
        (
          <div style={{ textAlign: "center" }}>
            <h3>Loading...</h3>
          </div>
        )
      }
      {!loader &&
        (
          <div>
            <h3 style={{ textAlign: "center" }} >{data.title}</h3>
            <img src={data.hdurl} alt={data.title} style={{ width: "80%", margin: "auto", display: "block" }} />
            <p style={{ margin: "auto", width: "80%" }}>Date: {data.date}</p>
            <p style={{ margin: "auto", width: "80%" }}>{data.explanation}</p>
          </div>
        )
      }
    </div>
  )
}

export default App