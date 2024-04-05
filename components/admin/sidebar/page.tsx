import SidebarProps from "./SidebarProps";
import "./sidebar.scss";
import LogoutForm from "@/components/shared/LogoutForm/LogoutForm";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <SidebarProps />
        <LogoutForm />
      </nav>
    </aside>
  );
};

export default SideBar;
