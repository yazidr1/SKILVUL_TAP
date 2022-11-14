# Web Service & RESTful API for ToDoList Application
## Built With
- express.js
- mongodb
- mongoose
- jsonwebtoken (jwt)
- bcrypt
- dotenv

## APIs Specification
base-url: localhost:3000/
### Users
- #### Register
- Method : POST
- Endpoint : /user/register
- Body :
```json
{
    "name": "Saya",
    "email": "sahaya",
    "password": "sahaya"

}
```
- Response
```json
{
    "message": "data has been created!!"
}
```
- #### Login
- Method : POST
- Endpoint : /user/login
- Body :
```json
{
    "email": "sahaya",
    "password": "sahaya"
}
```
- Response :
```json
{
    "message": "Login succeed"
    "token",
}
```
### Todo
- ### Add Todo
- Method : POST
- Endpoint : /todo
- Header : {the-pass : token}
- Body :
```json
{
    "text": "string",
    "isComplete": false
}
```
- Response :
```json
{
  "message": "todo has been created"
}
```
- ### Get All Todo
- Method : GET
- Endpoint : /todo
- Header : {the-pass : token}
- Response
```json
{
  "message": "success get data",
  "data": [
    {
      "_id": "string",
      "name": "make dumpling",
      "isComplete": false,
      "__v": 0
    },
}
```
- ### Get Todo By ID
- Method : GET
- Endpoint : /todo/:id
- Header : {the-pass : token}
- Response
```json
{
  "message": "success get data",
  "data": [
    {
      "_id": "string",
      "name": "make dumpling",
      "isComplete": false,
      "__v": 0
    }
}
```
- ### Update ToDo By ID
- Method : PUT
- Endpoint : /todo/:id
- Header : {the-pass : token}
- Body :
```json
{
    "name": "string",
    "isComplete": false
}
```
- Response
```json
{
  "message": "update data success"
}
```
- ### Delete ToDo By ID
- Method : DELETE
- Endpoint : /todo/:id
- Header : {the-pass : token}
- Response
```json
{
  "message": "delete data success"
}
```
- ### Delete All ToDo
- Method : DELETE
- Endpoint : /todo
- Header : {the-pass : token}
- Response
```json
{
  "message": "delete data success"
}
```