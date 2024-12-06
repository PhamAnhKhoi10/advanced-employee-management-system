import { useEffect, useState } from "react";
import TokenService from "../services/token.service";
import {
  selectEmployees,
  setUserWithSession,
} from "../redux/slice/employeeSlice";
import { useDispatch, useSelector } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user } = useSelector(selectEmployees);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await TokenService.getToken();
      console.log("Token:", token);
      setIsAuthenticated(!!token); // Set true if token exists
      setIsLoading(false); // Mark as loaded
      if (token && !user) {
        dispatch(setUserWithSession(token));
        console.log(token);
        console.log(user); // Set the user object if token exists
      }
    };
    checkAuth();
  }, [dispatch, user]);

  return { isAuthenticated, isLoading };
};

export default useAuth;
