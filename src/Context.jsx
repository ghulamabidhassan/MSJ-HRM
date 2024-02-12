import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);
  const [staffSidebar, setStaffSidebar] = useState(false);

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
        forgotPass,
        setForgotPass,
        staffSidebar,
        setStaffSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGolbalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGolbalContext };
