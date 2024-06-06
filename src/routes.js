const routes = (handler) => [
  {
    method: "GET",
    path: "/",
    handler: () => ({ message: "Terima kasih karena selalu ada~" }),
  },
  {
    method: "POST",
    path: "/products",
    handler: handler.addProductHandler,
  },
  {
    method: "GET",
    path: "/products",
    handler: handler.getAllProductsHandler,
  },
  {
    method: "GET",
    path: "/products/{id}",
    handler: handler.getOneProductHandler,
  },
  // {
  //   method: "POST",
  //   path: "/storages/upload",
  //   handler: handler.uploadFileHandler,
  //   options: {
  //     payload: {
  //       allow: "multipart/form-data",
  //       multipart: true,
  //       output: "stream",
  //     },
  //   },
  // },
  // {
  //   method: "GET",
  //   path: "/storages/files",
  //   handler: handler.getListFilesHandler,
  // },
  // {
  //   method: "POST",
  //   path: "/storages/files/download",
  //   handler: handler.downloadFileHandler,
  // },
  // {
  //   method: "POST",
  //   path: "/storages/files/url",
  //   handler: handler.getFileURLHandler,
  // },
];

module.exports = routes;
