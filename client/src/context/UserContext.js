import React, { createContext, useState } from 'react';
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  
  const [formData, setFormData] = useState({
    problemStatement: "",
		problemDescription: "",
		githubLink: "",
		allTags: [],
  });

  return (
    <UserContext.Provider value={{ formData, setFormData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
