import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      tasks: []
    };
   
    
  }

componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    fetch('/api/people')
      .then(res => res.json())
      .then(data => {
        this.setState({tasks: data});
      });
  }

  render() {
    return (
      <div className= "grey lighten-3">
        {/* NAVIGATION */}
        <nav className=  "blue-grey">
    <div class="nav-wrapper">
    <a href="https://www.la.logicalis.com/" class="brand-logo"><i class="material-icons">cloud</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="People.js">SWAPI</a></li>
        <li><a href="https://www.linkedin.com/in/diego-federico-tapia-a25986176/">Linkedin</a></li>
      </ul>
    </div>
  </nav>
        <div className="container">
          
            <div className="col s7">
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Estatura (cm)</th>
                    <th>Genero</th>
                    <th>Masa</th>
                    <th>Pelo</th>
                    <th>Ojos</th>
                    <th>Nacimiento</th>
                    <th>homeworld</th>
                   {/*  <th>films</th>
                    <th>species</th>
                    <th>vehicles</th>
                    <th>starships</th>
                    <th>created</th>
                    <th>edited</th> 
                    <th>url</th> */}

                  </tr>
                </thead>
                <tbody>
                  { 
                    this.state.tasks.map(task => {
                      return (
                        <tr key={task._id}>
                          <td>{task.name}</td>
                          <td>{task.height}</td>
                          <td>{task.gender}</td>
                          <td>{task.mass}</td>
                          <td>{task.hair_color}</td>
                          <td>{task.eye_color}</td>
                          <td>{task.birth_year}</td>
                          <td>{task.homeworld}</td>
                         {/*  <td>{task.films}</td>
                          <td>{task.species}</td>
                          <td>{task.vehicles}</td>
                          <td>{task.starships}</td>
                          <td>{task.created}</td>
                          <td>{task.edited}</td>
                          <td>{task.url}</td> */}
                          
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

      
    )
  }
}

export default App;