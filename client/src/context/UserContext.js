import React, { createContext, useState } from 'react';
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  
  const [formData, setFormData] = useState({
    problemStatement: "",
		problemDescription: "",
		githubLink: "",
		allTags: [],
  });

  const [showScreen, setShowScreen] = useState(false);

  return (
    <UserContext.Provider value={{ formData, setFormData, showScreen, setShowScreen }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
