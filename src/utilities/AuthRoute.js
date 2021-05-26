// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// const AuthRoute = ({ component: Component, data, ...rest }) => {
//     const token = localStorage.getItem('token');
//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 token ? <Component {...props} {...rest} /> : <Redirect to="/" />
//             }
//         />
//     );
// };

// export default AuthRoute;