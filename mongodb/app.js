const mongoose = require('mongoose');
mongoose.connect(
  "mongodb+srv://habertorogy12:habertorogy12@cluster0.cqx5ouj.mongodb.net/"
).then(()=> console.log('db connected sucessfully')).catch((e)=>console.log(e))


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String

})

//user model 
const user = mongoose.model('user', userSchema);

async function runQuery(){
    try {

        //create a new doccument
      const newUser = await user.create({
        name: 'Habert Rogena',
        email: 'habetdev@gmail.com',
        password: 'yakuza'
      });  
      console.log('created new user....');

      const allUsers = await user.find({})
      console.log(allUsers);
        
    } catch (error) {
        console.log(error)
    }
}

runQuery()