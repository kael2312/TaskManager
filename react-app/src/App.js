import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import LoginPage from "./features/Auth/Login/LoginPage/login-page";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./features/Auth/Register/RegisterPage/register-page";
import Project from "./features/Projects/project";
import TaskPage from "./features/Tasks/pages/taks-page";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div className="content">
                <Routes>
                    <Route path="/" element={<LoginPage></LoginPage>}></Route>

                    <Route
                        path="/login"
                        element={<LoginPage></LoginPage>}
                    ></Route>
                    <Route
                        path="/register"
                        element={<RegisterPage></RegisterPage>}
                    ></Route>
                    <Route
                        path="/project"
                        element={<Project></Project>}
                    ></Route>
                    <Route
                        path="/tasks"
                        element={<TaskPage></TaskPage>}
                    ></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
