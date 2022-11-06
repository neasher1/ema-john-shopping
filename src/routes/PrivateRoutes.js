import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom/dist';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>Loading....</div>
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoutes;