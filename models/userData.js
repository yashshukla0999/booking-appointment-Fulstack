const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  PhoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
 
},
{
timestamps:false
}
);


module.exports = User;




























// const Sequelize = require('sequelize');
// const sequelize = require('../util/database')
// const User = sequelize.define('users', {
//     id: {

//         type: Sequelize.INTEGER,

//         autoIncreament: true,
//         allowNULL: false,
//         primaryKey: true


//     },
//     name:{
//         type:Sequelize.STRING,
//         allowNULL:false
//     },
//     email:{
//         type:Sequelize.STRING,
//         allowNULL:false,
//         unique:true
        

//     },
//     phoneNumber:{
//         type:Sequelize.INTEGER,
//         allowNULL:false,
//         unique:true
        

//     }

    

// });
// module.exports=User;