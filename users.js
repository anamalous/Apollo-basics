import { DataSource } from 'apollo-datasource';
import users from "./usermodel.js";

class User extends DataSource {
  
  constructor() {
    super();
    this.user=users;
  }

  async initialize(config) {
    this.context=config.context;
  }

  async getAllUsers(){
    return this.user;
  }

  async getUser({id}){
    const users=this.user;
    const key = Object.keys(users).find(user => users[user].id === id);
    return this.user[key];
  }
  
  async addUser({uid,uname}){
    this.user.push({"id":uid,"name":uname});
    const key = Object.keys(users).find(user => users[user].id === uid);
    return this.user[key];
  }

  async delUser({uid}){
    const key = Object.keys(this.user).find(user => this.user[user].id === uid);
    this.user.pop(this.user[key]);
    return "deleted";
  }
}
export default User;

