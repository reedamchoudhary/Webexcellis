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

export const AppContext = createContext();

function App() {
  const [email, setEmail] = useState();

  return (
    <div className="App">
      <AppContext.Provider value={{ email, setEmail }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<EmailForm />} />
            <Route path={Path.EMAIL_VERIFICATION} element={<EmailForm />} />
            <Route path={Path.CREATE_ACCOUNT} element={<CreateAccountForm />} />
            <Route path={Path.DASHBOARD} element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
