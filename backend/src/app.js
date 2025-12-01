import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

import { appConfig, connectDB } from "./config/index.js";


const app = express();

// Middlewares
app.use(cors({ origin: appConfig.clientURL, credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Routes

// Swagger
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Sweety Bakery API",
            version: "1.0.0",
            description: "API documentation using Swagger",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    apis: ["./api/routes/*.routes.js"], // files containing annotations as above
};

const specs = swaggerJSDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs, { explorer: true }));

// MongoDB connection
await connectDB();

export default app;
