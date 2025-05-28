import { AuthContext, type ErrorState } from "@/context/AuthContext";
import type { CourseType } from "@/context/components/CoursesContext";
import { useEffect, useState } from "react";

export type UserType = {
  id?: string;
  username?: string;
  email?: string;
  role?: "user" | "mentor" | "admin";
  createdAt?: string;
  updatedAt?: string;
  course?: CourseType[] | null;
};

const API_USER = import.meta.env.VITE_API_USER;
const API_ALLUSERS = import.meta.env.VITE_API_ALLUSERS;
const API_LOGIN = import.meta.env.VITE_API_LOGIN;
const API_REGISTER = import.meta.env.VITE_API_REGISTER;
const API_UPDATEUSER = import.meta.env.VITE_API_UPDATEUSER;
const API_LOGOUT = import.meta.env.VITE_API_LOGOUT;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [allUsers, setAllUsers] = useState<UserType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorState>({
    login: '',
    register: '',
    logout: '',
    updateUser: '',
    getUser: '',
    getAllUsers: '',
  });

  // Get current user once
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(API_USER, {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        setUser(data);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        setError((prev) => ({ ...prev, getUser: message }));
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await fetch(API_ALLUSERS, {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to fetch all users");
        const data = await res.json();
        setAllUsers(data.data);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        setError((prev) => ({ ...prev, getAllUsers: message }));
      } finally {
        setLoading(false);
      }
    };
    fetchAllUsers();
  }, []);

  const login = async ({ email, password }: { email: string; password: string }) => {
    setLoading(true);
    try {
      const res = await fetch(API_LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      setUser(data.data || data);
      return data;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setError((prev) => ({ ...prev, login: message }));
      return { error: message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (user: UserType) => {
    setLoading(true);
    try {
      const res = await fetch(API_REGISTER, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(user),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Register failed");
      setUser(data.data || data);
      return data;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setError((prev) => ({ ...prev, register: message }));
      return { error: message };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_LOGOUT, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      setUser(null);
      return data;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setError((prev) => ({ ...prev, logout: message }));
      return { error: message };
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (user: UserType) => {
    setLoading(true);
    try {
      const res = await fetch(API_UPDATEUSER, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(user),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Update failed");
      setUser(data.data || data);
      return data;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setError((prev) => ({ ...prev, updateUser: message }));
      return { error: message };
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        allUsers,
        login,
        register,
        logout,
        updateUser,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
