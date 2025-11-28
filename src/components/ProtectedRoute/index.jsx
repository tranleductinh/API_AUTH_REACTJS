import AuthContext from '@/contexts/authContext';
import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children, role: requiredRoles}) => {
  const {user} = useContext(AuthContext)
  if(!user) {
    toast.error("Vui lòng đăng nhập");
        return <Navigate to="/sign-in" />
    
  }
  if(!requiredRoles.includes(user.data.data.user.role)) {
    toast.error("Bạn không có quyền truy cập");
        return <Navigate to="/sign-in" />
  }
  return children
}

export default ProtectedRoute
