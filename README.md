# NASA - Astronomy Picture of the Day Display
Python FastAPI - JS - HTML app that displays the Astronomy Picture of the Day, using NASA APOD Open API.

The user specifies a date which is passed in the fetchData function inside the useEffect hook, then an axios request is made to the backend, then the FastAPI function "getapod" makes a GET request to the NASA Open API. The Astronomy Picture of that specific date is finally displayed.
