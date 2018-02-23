import React, { Component } from 'react'
import axios from "axios"
import { BACKEND_API } from '../constants'


class Signup extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    axios.get(`${BACKEND_API}/users`)
      .then(response => {
        console.log('response.data.data is', response.data.data)
        this.setState({ users: response.data.data })
      })
      .catch(error => console.log(error))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: `${BACKEND_API}/users`,
      // data: ,
    })
    // axios.post(`${BACKEND_API}/users`)
    // .then()
    // .catch(err => console.log(err))
  }

  render() {
    let users = this.state.users
    console.log('from render, users is', this.state.users)
    return (
      <div>
        <section>
          <h1>Testing</h1>
        {
          users.map((user, index) => {
            return <h1 key={index}>{user.attributes.name}</h1>
          })
        }
        </section>
          <form className="center" action={`${BACKEND_API}/users`} method="post">
            <input className="center" type="text" name="user[name]" placeholder="Name" />
            <input className="center" type="password" name="user[password_digest]" placeholder="Password" />
            <input className=" center btn waves-effect waves-light-green darken-5 "type="submit" value="Register" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default Signup
