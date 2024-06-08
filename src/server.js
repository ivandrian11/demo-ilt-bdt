const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const ProductsHandler = require("./handler");
const PostgreService = require("./services/PostgreService");
const SupabaseService = require("./services/SupabaseService");
require("dotenv").config();

const init = async () => {
  const server = Hapi.server({
    host: "localhost",
    port: "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  const productsService = new SupabaseService();
  const productsHandler = new ProductsHandler(productsService);
  server.route(routes(productsHandler));

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
