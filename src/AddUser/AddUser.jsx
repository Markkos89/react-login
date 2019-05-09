import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { userService } from '@/_services';
import { history } from './../_helpers';

const renderOptions = roles => {
  return roles.map((el, index) => {
    return (<option key={el._id} value={el._id} label={el.role} />)
  })
}

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roles: []
    };
  }

  componentDidMount() {
    if(!this.state.roles.length) userService.getRoles().then(roles => this.setState({ roles }));
  }

  render() {
    const { roles } = this.state;
    
    return(
      <div>
        <h1>Agregar usuario</h1>
        <Formik
          initialValues={{ 
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            role: ''
          }}
          onSubmit={(values, { setSubmitting }) => {
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
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required('Este campo es requerido'),
            password: Yup.string().required('Este campo es requerido'),
            firstname: Yup.string().required('Este campo es requerido'),
            lastname: Yup.string().required('Este campo es requerido')
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <label htmlFor="username" style={{ display: 'block' }}>
                  username
                </label>
                <input
                  id="username"
                  placeholder="Enter your username"
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.username && touched.username ? 'text-input error' : 'text-input'
                  }
                />
                {errors.username &&
                  touched.username && <div className="input-feedback">{errors.username}</div>}

                <label htmlFor="password" style={{ display: 'block' }}>
                  password
                </label>
                <input
                  id="password"
                  placeholder="Enter your password"
                  type="text"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password &&
                  touched.password && <div className="input-feedback">{errors.password}</div>}

                <label htmlFor="firstname" style={{ display: 'block' }}>
                  firstname
                </label>
                <input
                  id="firstname"
                  placeholder="Enter your firstname"
                  type="text"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.firstname && touched.firstname ? 'text-input error' : 'text-input'
                  }
                />
                {errors.firstname &&
                  touched.firstname && <div className="input-feedback">{errors.firstname}</div>}

                <label htmlFor="lastname" style={{ display: 'block' }}>
                  lastname
                </label>
                <input
                  id="lastname"
                  placeholder="Enter your lastname"
                  type="text"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastname && touched.lastname ? 'text-input error' : 'text-input'
                  }
                />
                {errors.lastname &&
                  touched.lastname && <div className="input-feedback">{errors.lastname}</div>}

                <label htmlFor="role" style={{ display: 'block' }}>
                  role
                </label>
                <select
                  name="role"
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ display: 'block' }}
                >
                  <option value="" label="Seleccionar un rol" />
                  {
                    renderOptions(roles)
                  }
                </select>
                {errors.color &&
                  touched.color &&
                  <div className="input-feedback">
                    {errors.color}
                  </div>}

                <div>
                  <button
                    type="button"
                    className="outline"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                  >
                    Reset
                  </button>
                  <button type="submit" disabled={isSubmitting}>
                    Agregar
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    )
  }
};

export { AddUser };