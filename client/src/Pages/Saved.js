import React, { Component } from "react";
import API from "../utils/API";

class Saved extends Component {
  state = {
    savedBooks: [],
  };

  getSavedBook = (e) => {
    API.getBooks()
      .then((res) => {
        this.setState({ savedBooks: res.data.items }, function () {
          console.log(this.state.savedBooks);
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    API.getBooks()
      .then((res) => this.setState({ savedBooks: res.data }))
      .catch((err) => console.error(err));
  }

  handleDeleteButton = (id) => {
    API.deleteBook(id)
      .then((res) => this.componentDidMount())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2>Saved Books</h2>
          {this.state.savedBooks.map((book) => (
            <div className="card mb-3" key={book._id}>
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    className="card-img"
                    alt={book.volumeInfo.title}
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {book.volumeInfo.title} by{" "}
                      {book.volumeInfo.authors}
                    </h5>
                    <p className="card-text">
                      {book.volumeInfo.description}
                    </p>
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

export default Saved;
