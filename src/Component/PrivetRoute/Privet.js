import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';

const Privet = ({children, ...rest}) => {
    const {user,  isloding}=useFirebase();
    console.log(isloding);
    if (isloding){
     return  <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
        {...rest}
        render={
          ({ location }) => (
            user.email
              ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                    state: { from: location }
                  }}
                />
              ))
        }
      />
    );
  }

export default Privet;