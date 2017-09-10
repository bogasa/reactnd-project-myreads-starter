import React from 'react'
import AddBook from './AddBook'
import { Link, Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  
  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                
              </div>
              <div className="open-search">
                <Link to='/add-book'>Add a book</Link>
              </div>
            </div>
          )}
          />
          <Route exact path='/add-book' component={AddBook} />          
      </div>
    )
  }
}

export default BooksApp
