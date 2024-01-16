import "dotenv/config"
import express from "express";
const app = express();
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';


const PORT = process.env.PORT || 3001
//* Swagger configuration
const options = {
   definition: {
     openapi: '3.0.0',
     info: {
       title: 'Personal Task Manager',
       version: '1.0.0',
       description: 'Description of your API',
     },
   },
   apis: ['./routes/userRoutes.js', './routes/taskRoutes.js', './routes/noteRoutes.js'],
 };
 const specs = swaggerJsdoc(options);

 //* Serve Swagger UI at /api-docs endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// * middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
   return res.send("hello world");
})

// * Routes fils
import routes from "./routes/index.js";
app.use(routes)

app.listen(PORT,()=> console.log(`Server running on port:${PORT}`));
