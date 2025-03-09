import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Login from "./pages/login";
import EventsPage from "./pages/EventsPage";
import RequestsPage from "./pages/RequestsPage";
import ManageEventsPage from "./pages/ManageEventsPage";
import ManageRequestsPage from "./pages/ManageRequestsPage";
import HospitalsPage from "./pages/HospitalsPage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 管理是否登录
  const [activePage, setActivePage] = useState("events"); // 默认显示 Évènements

  // 登录成功后，切换到 Évènements 页面
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="h-screen">
      {/* 如果未登录，显示 Login 页面 */}
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="flex h-screen">
          {/* 左侧导航栏 */}
          <Sidebar setActivePage={setActivePage} />

          {/* 右侧内容区域 */}
          <div className="flex-1 p-10 bg-gray-100">
            {activePage === "events" && <EventsPage />}
            {activePage === "requests" && <RequestsPage />}
            {activePage === "manage-events" && <ManageEventsPage />}
            {activePage === "manage-requests" && <ManageRequestsPage />}
            {activePage === "hospitals" && <HospitalsPage />}
          </div>
        </div>
      )}
    </div>
  );
}