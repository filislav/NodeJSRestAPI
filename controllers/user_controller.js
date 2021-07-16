const db = require('../db');
class UserController{
    async createUser(req,res){
        const {name,surname} = req.body; //получение из тела запроса и распарсивание сразу
        const newPerson = await db.query('insert into person(usname,surname) values($1,$2) RETURNING *',[name, surname]);
        res.json(newPerson.rows[0]);
    };
    async getUsers(req,res){
        const users = await db.query('select * from person');
        res.json(users.rows);
    };
    async getOneUser(req,res){
        const id = req.params.id; //указывается после "/" 
        const user = await db.query('select * from person where id = $1',[id]);
        res.json(user.rows[0]);
    }
    async updateUser(req,res){
        const{id,name,surname} = req.body;
        const user = await db.query('update person set usname=$1, surname=$2 where id=$3 returning *',
        [name,surname,id]);
        res.json(user.rows[0]);
    }
    async deleteUser(req,res){
        const id = req.params.id;
        const user = await db.query('delete from person where id = $1',[id]);
        res.json(user.rows[0]);
    }
}
module.exports = new UserController();