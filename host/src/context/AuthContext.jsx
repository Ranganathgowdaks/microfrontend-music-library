import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 👈 Add loading state

  useEffect(() => {
    const saved = localStorage.getItem("authUser");
    if (saved) {
      setUser(JSON.parse(saved));
    }
    setLoading(false); // 👈 Done checking localStorage
  }, []);

  const login = (role) => {
    const userData = { role };
    setUser(userData);
    localStorage.setItem("authUser", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
