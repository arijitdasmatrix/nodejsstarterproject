
const db = require("./../../utils/database");

 module.exports = class User {
 constructor(id,name,comment,gender,dateofbirth,country,degreeandcertificates,interest,profileImage,sportsInterest,email,phoneno) {
  this.id = id;
  this.name = name;
  this.comment = comment; 
  this.gender = gender; 
  this.dateofbirth = dateofbirth;
  this.country = country; 
  this.degreeandcertificates = degreeandcertificates;
  this.interest = interest;
  this.profileImage = profileImage; 
  this.sportsInterest = sportsInterest;
  this.email = email;
  this.phoneno = phoneno;
 } 

 save() {
 return db.execute(
    `INSERT INTO Users ( name, comment, gender, dateofbirth, country, degreeandcertificates, interest, profileImage, sportsInterest, Email, PhoneNo) VALUES ( ?, ? , ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [ this.name,this.comment,this.gender,this.dateofbirth,this.country,this.degreeandcertificates,this.interest,this.profileImage,this.sportsInterest,this.email,this.phoneno]
  );
 } 
 
 static fetchAll() {
  return db.execute("SELECT * FROM Users");
 }

 static findById(id) {
  return db.execute(`SELECT * FROM Users WHERE (id = ${id}) `);
 } 
 
 static editById(id) {

 }

 static  deleteById(id) {
 return db.execute(`DELETE FROM Users WHERE (id = ${id}) `);
 }

}


// const sequlaize = require("sequlaize");

// const sequlaize = require("../../utils/database");

// const User = sequlaize.define('Users',{
// id:{
//   type: sequlaize.INTEGER,
//   autoIncrement: true,
//   primaryKey: true,
//   allowNull: false,
//   unique: true
// },
// name: {
// type: DataTypes.STRING,
// allowNull: false,
// },
// comment: {
// type: DataTypes.STRING,
// allowNull: false,
// },
// gender: {
// type: DataTypes.STRING,
// allowNull: false,
// },
// dateofbirth: {
// type: DataTypes.STRING,
// allowNull: false,
// },
// country: {
// type: DataTypes.STRING,
// allowNull: false,  
// },
// degreeandcertificates: {
// type: DataTypes.STRING,
// allowNull: false,  
// },
// interest: {
// type: DataTypes.STRING,
// allowNull: false,   
// },
// profileImage: {
// type: DataTypes.STRING,
// allowNull: false,    
// },
// sportsInterest: {
// type: DataTypes.STRING,
// allowNull: false,      
// }

// }
// );

// module.exports = User;