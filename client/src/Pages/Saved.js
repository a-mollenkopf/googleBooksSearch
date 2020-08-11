import React, { Component } from "react";
import API from "../utils/API";

class Saved extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.getGoogleSearchBooks()
      .then((res) => {
        this.setState({ savedBooks: res.data });
      })
      .catch((err) => console.log(err));
  }

  generateSavedBooks = () => {
    API.getSavedBook().then((res) => {
      this.setState({ savedBooks: res });
    });
  };

  handleDelete(id) {
    API.deleteBook(id)
      .then((_) => {
        this.componentDidMount();
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2>Saved Books</h2>
          {this.state.savedBooks.map((books) => (
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
                      {books.volumeInfo.title} by{" "}
                      {books.volumeInfo.authors}
                    </h5>
                    <p className="card-text">
                      {books.volumeInfo.description}
                    </p>
                    <button
                      className="btn btn-danger specialBtn"
                      type="submit"
                      id={books._id}
                      onClick={() => this.handleDelete(books._id)}
                    >
                      Delete Book
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

export default Saved;
