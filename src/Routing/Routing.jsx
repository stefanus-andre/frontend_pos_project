import { Route, Routes } from "react-router-dom";
import Index from "../Index";
import Login from "../Login";
import UserDashboard from "../User/Dashboard/UserDashboard";

export default function Routing() {
    return (
        <Routes>
            <Route index element={<Index/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/user/dashboard" element={<UserDashboard/>}/>
        </Routes>
    )
}