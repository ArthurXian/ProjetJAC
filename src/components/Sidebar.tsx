import { useState } from "react";
import { FaCalendarAlt, FaClipboardList, FaHospital, FaTimes } from "react-icons/fa";

const menuItems = [
  { name: "Évènements", id: "events", icon: <FaCalendarAlt /> },
  { name: "Demandes", id: "requests", icon: <FaClipboardList /> },
  { name: "Gérer event.", id: "manage-events", icon: <FaTimes /> },
  { name: "Gérer dem.", id: "manage-requests", icon: <FaTimes /> },
  { name: "Hôpitaux", id: "hospitals", icon: <FaHospital /> }
];

interface SidebarProps {
  setActivePage: (page: string) => void;
}

export default function Sidebar({ setActivePage }: SidebarProps) {
  const [active, setActive] = useState("events");

  return (
    <div className="w-1/5 min-w-[250px] h-screen bg-pink-500 text-white flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-8 text-center">TOUT LE MONDE CONTRE LE CANCER</h1>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
              active === item.id ? "bg-pink-700" : "hover:bg-pink-600"
            }`}
            onClick={() => {
              setActive(item.id);
              setActivePage(item.id);
            }}
          >
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
