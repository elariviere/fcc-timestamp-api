var express = require('express');

var app = express()

app.get('/:date', function (req, res) {
  var date = new Date(req.params.date);
  if (!isNaN(date.getTime())) {
    console.log(date);
    res.status(200).json({unix:date.getTime() / 1000, 
      natural: date.toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'})})
  } else {
    res.status(400).json({unix:null, natural:null});
  }
})

app.listen(process.env.PORT || 8080);
