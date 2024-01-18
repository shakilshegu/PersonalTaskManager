import "dotenv/config"
import express from "express";
import cors from "cors";  
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
       description: 'This Personal Task Management ',
     },
     components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
     server:[
      {
         url:"https://personaltaskmanager.onrender.com/"
      }
     ]
   },
   apis: ['./routes/userRoutes.js', './routes/taskRoutes.js', './routes/noteRoutes.js'],
 };
 const specs = swaggerJsdoc(options);

 //* Serve Swagger UI at /api-docs endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// * middleware
app.use(cors({
  origin: 'http://localhost:3001', 
methods: ['GET', 'POST','PUT','PATCH','DELETE'], // Allow specific HTTP methods
credentials: true, // Allow cookies and authentication headers
}));
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
   return res.send("hello world");
})

// * Routes fils
import routes from "./routes/index.js";
app.use(routes)

app.listen(PORT,()=> console.log(`Server running on port:${PORT}`));
