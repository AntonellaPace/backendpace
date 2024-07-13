import mongoose from "mongoose";
import configObject from "./config/config.js";

const { mongo_url } = configObject;

mongoose.connect(mongo_url)
    .then(() => console.log("Conectados a MongoDB "))
    .catch((error) => console.log("Error de conexion: ", error));