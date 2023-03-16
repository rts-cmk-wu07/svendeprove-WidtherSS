import { createContext, useContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { ToastContainer } from 'react-toastify';
const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
    userRole,
    setUserRole,
  };

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem("authToken");
      if (token) {
        const decodedToken = jwt_decode(token);
        setUserRole(decodedToken.role);
      }
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={value}>
    {children}
    <ToastContainer />
  </AuthContext.Provider>
  );
};

export default AuthProvider;
