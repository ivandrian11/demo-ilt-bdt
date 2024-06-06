class ProductsHandler {
  constructor(service) {
    this._service = service;

    this.addProductHandler = this.addProductHandler.bind(this);
    this.getAllProductsHandler = this.getAllProductsHandler.bind(this);
    this.getOneProductHandler = this.getOneProductHandler.bind(this);
    this.uploadFileHandler = this.uploadFileHandler.bind(this);
    this.getListFilesHandler = this.getListFilesHandler.bind(this);
    this.downloadFileHandler = this.downloadFileHandler.bind(this);
    this.getFileURLHandler = this.getFileURLHandler.bind(this);
  }

  async addProductHandler(request, h) {
    const { name = "untitled", price, category } = request.payload;
    const product = await this._service.addProduct({ name, price, category });

    const response = h.response({
      status: "success",
      message: "Product berhasil ditambahkan",
      data: {
        product,
      },
    });

    response.code(201);
    return response;
  }

  async getAllProductsHandler(_, h) {
    const products = await this._service.getAllProducts();
    const response = h.response({
      status: "success",
      message: "Product berhasil ditampilkan",
      data: {
        products,
      },
    });

    response.code(200);
    return response;
  }

  async getOneProductHandler(request, h) {
    const { id } = request.params;
    const product = await this._service.getOneProduct(id);

    const response = h.response({
      status: "success",
      message: "Product berhasil ditampilkan",
      data: {
        product,
      },
    });
    response.code(200);
    return response;
  }

  async uploadFileHandler(request, h) {
    const { file } = request.payload;
    const data = await this._service.uploadFile(file);

    const response = h.response({
      status: "success",
      message: "File berhasil diupload",
      data,
    });

    response.code(201);
    return response;
  }

  async getListFilesHandler(_, h) {
    const files = await this._service.getListFiles();

    const response = h.response({
      status: "success",
      message: "Files berhasil ditampilkan",
      data: {
        files,
      },
    });

    response.code(200);
    return response;
  }

  async downloadFileHandler(request, h) {
    const { path } = request.payload;
    const data = await this._service.downloadFile(path);

    const response = h.response({
      status: "success",
      message: "Tautan pengunduhan berhasil diambil",
      data,
    });
    response.code(200);
    return response;
  }

  async getFileURLHandler(request, h) {
    const { path } = request.payload;
    const data = await this._service.getFileURL(path);

    const response = h.response({
      status: "success",
      message: "Tautan berhasil diambil",
      data,
    });

    response.code(200);
    return response;
  }
}

module.exports = ProductsHandler;
