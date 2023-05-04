let loader = "<h1>Loading...</h1>"
document.getElementById("apod").innerHTML = loader

axios.get("http://localhost:8000/getapod")
  .then(function (response) {
    document.getElementById("apod").innerHTML = response.data
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })