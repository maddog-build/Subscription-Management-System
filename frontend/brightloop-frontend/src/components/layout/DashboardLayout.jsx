import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ role }) {
  return <div className="app-shell"><Sidebar role={role}/><div className="main-area"><Topbar/><main className="content"><Outlet/></main></div></div>;
}
