import React, { Component } from "react";
import API from "../utils/API";

class Search extends Component {
  state = {
    value: "",
    books: [],
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    API.getGoogleSearchBooks(this.state.search)
      .then((res) => {
        this.setState({ books: res.data.items }, function () {});
      })
      .catch((err) => console.log(err));
  };

  handleSaveBook = (e) => {
    e.preventDefault();
    const arrayOfBooks = this.state.books;
    const filteredArray = arrayOfBooks.filter(
      (book) => book._id === e.target._id
    );
    const savedBooks = filteredArray[0];
    console.log(savedBooks);

    API.saveBook(savedBooks)
      .then(this.setState({ message: alert("Book is saved") }))
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form>
          <div className="formgroup">
            <label htmlFor="search">
              <h2>Search and save your favorite books!</h2>
            </label>
            <input
              onChange={this.handleInputChange}
              value={this.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search a Book"
            />
            <button
              onClick={this.handleFormSubmit}
              className="btn btn-dark mt-3 mb-5"
            >
              Search
            </button>
          </div>
        </form>
        <div className="container">
          <h2>Results</h2>
          {this.state.books.map((books) => (
            <div className="card mb-3" key={books._id}>
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={books.volumeInfo.imageLinks.thumbnail}
                    className="card-img"
                    alt={books.volumeInfo.title}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {books.volumeInfo.title} by {books.volumeInfo.authors}
                    </h5>
                    <p className="card-text">{books.volumeInfo.description}</p>
                    <a
                      href={books.volumeInfo.infoLink}
                      className="btn badge-pill btn-outline-dark mt-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                    <button
                      id={books._id}
                      onClick={(e) => this.handleSaveBook(e)}
                      className="btn badge-pill btn-outline-warning mt-3 ml-3"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
