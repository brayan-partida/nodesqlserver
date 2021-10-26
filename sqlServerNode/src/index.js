console.log("hola mundo");
import app from "./app";
const port = 3000;
app.listen(app.get('port'));

console.log(`servidor escuchando en ${port}`);
