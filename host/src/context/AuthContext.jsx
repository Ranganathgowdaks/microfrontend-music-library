import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on initial mount
  useEffect(() => {
    const savedUser = localStorage.getItem("authUser");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        console.warn("Invalid user data in localStorage");
        localStorage.removeItem("authUser");
      }
    }
    setLoading(false);
  }, []);

  // Login stores user role in localStorage
  const login = (role) => {
    const userData = { role };
    setUser(userData);
    localStorage.setItem("authUser", JSON.stringify(userData));
  };

  // Logout clears user from both state and localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
