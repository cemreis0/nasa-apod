import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./GetApodDate.css"

const GetApodDate = () => {

  const [loader, setLoader] = useState(true)
  const [data, setData] = useState([])
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  useEffect(() => {
    const fetchData = async (date) => {
      try {
        setLoader(true)
        const {data: response} = await axios.get(`http://localhost:8000/getapod/${date}`)
        setData(JSON.parse(response[0]))
        console.log(response)
      } catch (error) {
        console.log(error.message)
      }
      setLoader(false)
    }
    fetchData(date)
  }, [date])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setDate(e.target.value)
  }

  return (
    <div className="container" style={{ textAlign: "center", marginTop: "10px" }}>
      <form onSubmit={handleSubmit}>
        <input type="date" onChange={handleChange} defaultValue={date} />
        <button type="submit">Get Astronomy Picture of the Day</button>
      </form>
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
            <h3 style={{ textAlign: "center", paddingTop: "10px" }}  >{data.title}</h3>
            <img src={data.hdurl} alt={data.title} style={{ maxHeight: "85vh", maxWidth: "100%", marginInline: "auto", display: "block", marginTop: "10px" }} />
            <p style={{ margin: "auto", maxWidth: "100%", width: "100%", marginTop: "10px" }}>Date: {data.date}</p>
            <p style={{ margin: "auto", maxWidth: "100%", width: "100%", marginTop: "10px", paddingBottom: "10px" }}>{data.explanation}</p>
          </div>
        )
      }
    </div>
  )
}

export default GetApodDate