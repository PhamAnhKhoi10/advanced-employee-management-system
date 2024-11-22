import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenService from "../services/token.service";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = TokenService.getToken();
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate("/login");
    }
  }, [navigate]);

  return isAuthenticated;
};

export default useAuth;
