const { createClient } = require("@supabase/supabase-js");
const { nanoid } = require("nanoid");

class SupabaseService {
  constructor() {
    this._supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );
  }

  async addProduct({ name, price, category }) {
    const id = nanoid(16);

    const { data } = await this._supabase
      .from("products")
      .insert({ id, name, price, category })
      .select();

    return data[0];
  }

  async getAllProducts() {
    const { data } = await this._supabase.from("products").select();

    return data;
  }

  async getOneProduct(id) {
    const { data } = await this._supabase
      .from("products")
      .select()
      .eq("id", id);

    return data[0];
  }

  // Fungsi untuk upload file ke Supabase Storage
  async uploadFile(file) {
    console.log(file.hapi.filename, file._data);
    const { data, error } = await this._supabase.storage
      .from("storage")
      .upload(`public/${file.hapi.filename}`, file._data);
    // .upload(file.hapi.filename, file._data);

    if (error) {
      console.log(error);
      throw error;
    }

    return data;
  }

  // Fungsi untuk mendapatkan list file dari Supabase Storage
  async getListFiles() {
    const { data, error } = await this._supabase.storage
      .from("storage")
      .list("public");

    if (error) {
      console.log(error);
      throw error;
    }

    return data;
  }

  // Fungsi untuk download file dari Supabase Storage
  async downloadFile(path) {
    const { data } = this._supabase.storage.from("storage").getPublicUrl(path, {
      download: true,
    });

    return data;
  }

  // Fungsi untuk mendapatkan URL dari file di Supabase Storage
  async getFileURL(path) {
    const { data } = this._supabase.storage.from("storage").getPublicUrl(path);

    return data;
  }
}

module.exports = SupabaseService;
