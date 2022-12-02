import { createContext, useEffect, useState } from "react";
import { createUser, onAuthChangeListner } from "../utils/firebase";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthChangeListner((user) => {
      console.log(user, "from context");

      if (user) {
        createUser(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
