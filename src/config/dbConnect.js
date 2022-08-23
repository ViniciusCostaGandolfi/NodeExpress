import mongoose from "mongoose";

mongoose.connect('mongodb+srv://Gandolfi:minimi19@cluster0.a6e7ldo.mongodb.net/Cluster0'); // acessnado banco de dados da minha conta

let db = mongoose.connection; // criando conecção

export default db;