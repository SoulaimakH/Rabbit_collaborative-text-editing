const express = require('express');
const { json } = require('express/lib/response');
var cors = require('cors');
const app = express()
const port = 3000
app.set('view engine', 'ejs')




var x;
var pos

app.get('', (req, res) => {
  //console.log(req.query.key);
  x=req.query.key;
  pos=req.query.pos
   /* res.render('index2', {
        key:req.query.key
    })*/
  
})

app.options('/c', cors())
app.get('/c',  cors(), function(req, res)  {
  
  const responseData = {
    key:x,
    position:pos
  
 
}
  
const jsonContent = JSON.stringify(responseData);
res.end(jsonContent);
    
  
})
app.get('/index', (req, res) => {
  
  res.render('index', {
    
})

})

app.listen(3000, () => {
  console.log(`App listening at port ${port}`)
})


const http = require('http');
  
const requestListener = (req, res)=>{
  console.log("Request is Incoming");
      
  const responseData = {
      key:x,
      position:pos
    
   
  }
    
  const jsonContent = JSON.stringify(responseData);
  res.end(jsonContent);
};
  
const server = http.createServer(requestListener);
server.listen(3004,'localhost', function(error){
  if(!error)
      console.log("Server is Listening at Port 3004!");
  else 
      console.log("Error Occured");
});
function returnX(){
  return x;
}
