import "./App.css";
import CreateAccountForm from "./Pages/CreateAccountForm";
// import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/bootstrap.min.css.map";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Path from "./constants/path";
import EmailForm from "./Pages/EmailForm";
import Dashboard from "./Pages/Dashboard";
import { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";

export const AppContext = createContext();

function App() {
  const [email, setEmail] = useState();
  const [dataList, setDataList] = useState([]);

  return (
    <div className="App">
      <AppContext.Provider value={{ email, setEmail, dataList, setDataList }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<EmailForm />} />
            <Route path={Path.EMAIL_VERIFICATION} element={<EmailForm />} />
            <Route path={Path.CREATE_ACCOUNT} element={<CreateAccountForm />} />
            <Route path={Path.DASHBOARD} element={<Dashboard />} />
            <Route path={Path.UPDATE_DATA} element={<CreateAccountForm />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
