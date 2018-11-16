import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      filtered: [],
      add: ""
    }
  }
  
  makePost = (event) => {
    this.setState({
      add: event.target.value
    })
  }

  addPost = () => {
    let newPosts= this.state.posts.concat({ item: this.state.add, checkbool: false })
    this.setState({
      posts: newPosts,
      filtered: newPosts,
    }, () => {
      axios.post('http://localhost:8080/todos', { item: this.state.add, checkbool: false })
    })
}

  deletePost = () => {
    let newList= this.state.posts.filter(post => post.checkbool === false)
    let deleteList= this.state.posts.filter(post => post.checkbool === true)
    this.setState({
      posts :newList,
      filtered: newList
    }, ()=> {
      deleteList.map(item => axios.delete('http://localhost:8080/todos', {data:item}))
    })
  }

  checkpls = (i) => {
    let list = this.state.filtered
    if (list[i].checkbool === false) {
      list[i].checkbool = true
    }

    else if (list[i].checkbool === true)  {
      list[i].checkbool = false
    }
    this.setState({
      filtered: list
    })
  }

  selectFilter = (e) => {
   //logic: This will only change the state of the filtered part, so that when I want to go back to "all", filtered will have the same state as posts
    let list = this.state.posts
    if (e.target.value=== "active") {
      list=list.filter(post => post.checkbool === false)
    }
    else if(e.target.value=== "complete"){
      list=list.filter(post => post.checkbool=== true)
    }
    this.setState({
      filtered: list
    })
  }

  componentDidMount=() => {
    axios.get('http://localhost:8080/todos')
    .then ((res) => {
      this.setState({
        posts: res.data,
        filtered:res.data
      })
    }) 
  }

  render() {
     let list=this.state.filtered.map((val,i) => {
       return <Todo item = {val.item} checkpls= {this.checkpls} i= {i} bool= {val.checkbool}/>
     })
   
  
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h1 className="text-center">To Do List</h1>
            <form>
              <div className="input-group">
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button" onClick={this.addPost} disabled={this.state.add===""} >Add</button>
                </span>
                <input className="form-control" placeholder="add a todo" value={this.state.add} onChange={this.makePost} />
              </div>
            </form>

            {list}

            <select onChange={this.selectFilter} >
              <option value="all">all</option>
              <option value="active">active</option>
              <option value="complete">complete</option>
            </select>

            <button onClick={this.deletePost} type="button" className="pull-right btn btn-default">Clear Complete</button>
          </div>
        </header>
      </div>
    );
  }
}

class Todo extends Component {

  render() {
    return (

      <ul className="list-group text-primary">
        <li className="list-group-item">
          <input onClick={() => this.props.checkpls(this.props.i)} type="checkbox" checked={this.props.bool}/>
          <label className={this.props.bool=== true ? "done" : "" }> {this.props.item} </label>
        </li>
      </ul>

    )
  }
}

export default App;

