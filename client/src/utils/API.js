import axios from "axios";

export default {
  getGoogleSearchBooks: function (query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },
  saveBook: function (savedBooks) {
    return axios.post("/api/books", savedBooks);
  },
  getBooks: function () {
    return axios.get("/api/books");
  },
  getSavedBook: function (id) {
    return axios.get("/api/books" + id);
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
};
