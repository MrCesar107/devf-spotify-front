import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Link } from 'react-router-dom'

const LOGIN = gql`
  mutation UserLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
    }
  }
`

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    redirect: false
  }

  setToken = (data) => {
    const { token } = data.userLogin
    if (token) {
      localStorage.setItem('jwt', token)
      this.props.props.history.push({
        pathname: '/home',
        state: { isLogged: true, token: token }
      })
    }
  }

  render() {
    return(
      <div>
        <Mutation mutation={LOGIN} variables={this.state}>
          {
            (userLogin, { data, error, loading }) => {
              if (data) this.setToken(data)
              if (error) {
                return(
                  <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                      let errors = {}
                      if (!values.email) {
                        errors.email = 'El email es requerido'
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                      ) {
                        errors.email = "Correo invalido"
                      }
                      if (!values.password) {
                        errors.password = 'La contraseña es requerida'
                      }
                      return errors
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        this.setState(() => ({
                          email: values.email,
                          password: values.password
                        }), () => userLogin())
                        setSubmitting(false)
                      }, 400)
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form className="form">
                        <div className="errors-container">
                          <div className="alert alert-danger" role="alert">
                            Error
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <Field type="email" name="email" className="form-control" />
                          <small id="emailHelp" className="form-text text-muted">
                            Nunca compartiremos tus datos con nadie.
                          </small>
                          <ErrorMessage name="email" component="div" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <Field type="password" name="password" className="form-control" />
                          <ErrorMessage name="password" component="div" />
                        </div>
                        <div className="form-inline btn-toolbar">
                          <div className="btn-group mr-4" role="group">
                            <Link to="/signup">
                              <button type="button" className="btn btn-primary">
                                Registrarse
                              </button>
                            </Link>
                          </div>
                          <div className="btn-group mr-2" role="group">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                              Iniciar Sesion
                            </button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                )
              }
              if (loading) return <p>Loading...</p>

              return (
                <Formik
                  initialValues={{ email: '', password: '' }}
                  validate={values => {
                    let errors = {}
                    if (!values.email) {
                      errors.email = 'El email es requerido'
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = "Correo invalido"
                    }
                    if (!values.password) {
                      errors.password = 'La contraseña es requerida'
                    }
                    return errors
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      this.setState(() => ({
                        email: values.email,
                        password: values.password
                      }), () => userLogin())
                      setSubmitting(false)
                    }, 400)
                  }}
                >
                {({ isSubmitting }) => (
                  <Form className="form">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field type="email" name="email" className="form-control" />
                      <small id="emailHelp" className="form-text text-muted">
                        Nunca compartiremos tus datos con nadie.
                      </small>
                      <ErrorMessage name="email" component="div" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field type="password" name="password" className="form-control" />
                      <ErrorMessage name="password" component="div" />
                    </div>
                    <div className="form-inline btn-toolbar">
                      <div className="btn-group mr-4" role="group">
                        <Link to="/signup">
                          <button type="button" className="btn btn-success">
                            Registrarse
                          </button>
                        </Link>
                      </div>
                      <div className="btn-group mr-2" role="group">
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                          Iniciar Sesion
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
                </Formik>
              )
            }
          }
        </Mutation>
      </div>
    )
  } 
}

export default Login
