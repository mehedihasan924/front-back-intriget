const express = require('express')
const app = express()
const cors = require('cors')
const port =process.env.PORT || 5000;


const users=[
    { id: 1 , name: "Mehedi Hasan" , email:"hasan@gmail.com"},
    { id: 2 , name: "Salman Ahmed" , email:"salman@gmail.com"},
    { id: 3 , name: "Khaled Hussain" , email:"kaledn@gmail.com"}
]
//midddleware
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/users', (req, res)=>{
    res.send(users)
})

// Post data patano
app.post('/users' ,(req, res)=>{
  console.log("Post Api Hitting");
  console.log(req.body);
  const newUser=req.body;
  newUser.id=users.length+1;
  users.push(newUser);
  res.send(newUser)

})


  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })