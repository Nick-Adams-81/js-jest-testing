const axios = require("axios")

axios.get("https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=substr")
.then(res => res.data)
.then(data => console.log(data))