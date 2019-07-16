import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Link } from 'react-router-dom'

const SIGNUP = gql`
  mutation Signup(
    $name: String!,
    $lastName: String!,
    $email: String!,
    $password: String!
  ) {
    userSignup(data: {
      name: $name,
      lastName: $lastName,
      email: $email,
      password: $password
    }) {
      token
      message
    }
  }
`

class Signup extends React.Component {
  state = {
    userData: {
      name: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  render() {
    return(
      <div>
        <Mutation mutation={SIGNUP} variables={this.state.userData}>
          {
            (signup, { data, error }) => {
              if (data) {
                localStorage.setItem("jwt", data.userSignup.token)
                this.props.props.history.push({
                  pathname: '/home',
                  state: { isLogged: true }
                })
                return null
              }

              if (error) {
                console.log(error)
                return <p>Error</p>
              }

              return(
                <Formik
                  initialValues={{
                    name: '',
                    lastName: '',
                    email: '',
                    password: ''
                  }}
                  validate={values => {
                    let errors = {}
                    if (!values.name) {
                      errors.name = 'El nombre es requerido'
                    }
                    if(!values.lastName) {
                      errors.lastName = 'El apellido es requerido'
                    }
                    if (!values.email) {
                      errors.email = 'El correo es requerido'
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = 'Correo inválido'
                    }

                    if (!values.password) {
                      errors.password = "Ingresa una contraseña"
                    }

                    return errors
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      this.setState((prevState) => ({
                        ...prevState,
                        userData: {
                          ...prevState.userData,
                          name: values.name,
                          lastName: values.lastName,
                          email: values.email,
                          password: values.password
                        }
                      }), () => signup())
                      setSubmitting(false)
                    }, 400)
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form className="form">
                      <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <Field type="text" name="name" className="form-control" />
                        <ErrorMessage name="name" component="div" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Apellido</label>
                        <Field type="text" name="lastName" className="form-control" />
                        <ErrorMessage name="lastName" component="div" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" className="form-control" />
                        <ErrorMessage name="email" component="div" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <Field type="password" name="password" className="form-control" />
                        <ErrorMessage name="password" component="div" />
                      </div>
                      <div className="form-inline btn-toolbar">
                        <div className="btn-group mr-4" role="group">
                          <Link to="/">
                            <button type="button" className="btn btn-success">
                              Ya tengo cuenta
                            </button>
                          </Link>
                        </div>
                        <div className="btn-group mr-2" role="group">
                          <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                            Registrarme
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

export default Signup