import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routeList } from './list';
import Layout from '../layout/Layout';

const AppRoutes: FC = () => {
  const isAuth = true;
  return (
    <Routes>
      {routeList.map((routeOne, index) => (
        <Route
          key={`routeOne ${routeOne.path}`}
          path={routeOne.path}
          element={
            routeOne.auth && !isAuth ? (
              <Navigate key={index} to="/login" />
            ) : (
              
                <Layout>
                  <routeOne.component />
                  </Layout>
                  
             
            )
          }
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
