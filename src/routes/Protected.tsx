import { Outlet, Navigate } from "react-router-dom";
import {useState} from "react"
import { useAuth } from "../Auth/authProvider";
export default function Protected(){
const auth = useAuth();

return auth.isAuthenticated ? <Outlet /> : <Navigate to = "/"/>

}