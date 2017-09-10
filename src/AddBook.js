import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import BookItem from './BookItem'
import * as BookAPI from './BooksAPI'

class AddBook extends Component {

    state = {
      showingBooks: []
    }

    updateQuery = (query) => {
      if(query) {
        BookAPI.search(query.trim()).then(res => {
          console.log(res);
          if(!res.hasOwnProperty('error')) {
            this.setState({showingBooks: res})
          }
          else {
            this.setState({showingBooks: []})
          }          
        }) 
      }
      else {
        this.setState({showingBooks: []})
      }
    }

    render() {
      return (
          <div className="search-books">
              <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                  
                  <input 
                      type="text" 
                      placeholder="Search by title or author"                      
                      onChange={(event)=> this.updateQuery(event.target.value)}
                  />

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {this.state.showingBooks.map((item)=>(
                   <li key={item.id}>
                     <BookItem data={item}/>
                   </li> 
                  ))}
                </ol>
              </div>
          </div>
      )
    }
}

export default AddBook;
