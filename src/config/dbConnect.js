import mongoose from "mongoose";

mongoose.connect('mongodb+srv://Gandolfi:minimi19@cluster0.a6e7ldo.mongodb.net/Cluster0');

let db = mongoose.connection;

export default db;