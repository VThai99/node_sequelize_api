const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    version: "1.0.0",
    title: "API God",
    description: "Api for my page",
  },
  // host: "localhost:3000",
  // basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "User",
      description: "Api for user",
    },
    {
      name: "Product",
      description: "Api for product",
    },
    {
      name: "Brand",
      description: "Api for brand",
    },
  ],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header",
      name: "X-API-KEY",
      description: "your token",
    },
  },
  definitions: {},
};

const outputFile = "./swaggerOutput.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./server.js");
});
