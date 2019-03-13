import React, { Component } from 'react';
import { userService } from '@/_services';
import { history } from './../_helpers';
import UserForm from './UserForm';

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roles: []
    };
  }

  componentDidMount() {
    if(!this.state.roles.length) userService.getRoles().then(roles => {
      console.log('roles => ', roles)
      this.setState({ roles })
    });
  }

  onHandleSubmit(values, { setSubmitting }) {
    const { username, firstname, lastname, password, role } = values;

    // mapeamos el objeto como deberia llegar a la api
    let mapingValues = {
      username,
      firstName: firstname,
      lastName: lastname,
      password,
      role
    };

    userService.postUser(mapingValues).then(res => {
      setSubmitting(true);
      history.push('/users');
    }).catch(err => {
      // en vez de alert, deberia usarse un div en que muestre el error
      alert(err);
      setSubmitting(false);
    })
  }

  render() {
    const { roles } = this.state;
    
    return(
      <UserForm
        roles={roles}
        onSubmit={this.onHandleSubmit}
      ></UserForm>
    )
  }
};

export { AddUser };