import ApiService from "@/services/ApiService"
import { 
  Settings, 
  LogOut,
  User,
  PawPrint,
  House,
  Dog,
  PackageSearch,
  Package,
  BriefcaseMedical,
  Handshake,
} from "lucide-react"
import { useLocation } from "react-router-dom";


const SideBarLayout = () => {
  const logout = () => {
    const apiService = new ApiService();
    const apiEndpoint = "public/auth/logout";

    apiService.get(apiEndpoint)
    localStorage.removeItem(import.meta.env.VITE_AUTH_COOKIE_NAME);
    window.location.href = "/login"
  }


  const location = useLocation();
  
  type UserRole = "Admin" | null;
  const userRole = localStorage.getItem(import.meta.env.VITE_AUTH_COOKIE_NAME) as UserRole;

  type RoleLinks = {
    [key: string]: { endpoint: string; component: React.ComponentType<{ className?: string }>; name: string }[];
    Admin: { endpoint: string; component: React.ComponentType<{ className?: string }>; name: string }[];
  };
  const roleBtns: RoleLinks = {
    "Admin": [
      {
        "endpoint": "/dashboard",
        "component": House,
        "name": "Dashboard"
      },
      {
        "endpoint": "/pedidos",
        "component": Handshake,
        "name": "Pedidos"
      },
      {
        "endpoint": "/clientes",
        "component": User,
        "name": "Clientes"
      },
      {
        "endpoint": "/pets",
        "component": Dog,
        "name": "Pets"
      },
      {
        "endpoint": "/produtos",
        "component": Package,
        "name": "Produtos"
      },
      {
        "endpoint": "/servicos",
        "component": BriefcaseMedical,
        "name": "Serviços"
      }
    ]
  }

  return (
    <aside className="bg-white flex shadow-md w-20">
  <nav className="mt-8 flex flex-col flex-1 items-center justify-between">
    <div>

      <div className="my-7">
        <a href="/">
          <h1 className="text-3xl font-bold text-blue-700">
            <PawPrint className="h-7 w-7"/>
          </h1>
        </a>
      </div>

      <div>
        {userRole ? (
          roleBtns[userRole].map((btn, idx) => {
            const ComponentIcon = btn.component;

            return (
              <a
                href={btn.endpoint}
                className={(location.pathname === btn.endpoint)? "px-4 py-2  text-blue-700": "px-4 py-2  text-gray-700 hover:text-blue-700"}
                key={idx}
              >
                <ComponentIcon className="h-6 w-6" />
              </a>
            );
          })
        ) : (
          (window.location.href = "/login")
        )}
      </div>

    </div>
    
    <div className="mb-8">
        <a
          href="#"
          className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-700"
        >
          <Settings className="h-6 w-6" />
        </a>
        <a
          href="#"
          onClick={logout}
          className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-700"
        >
          <LogOut className="h-6 w-6" />
        </a>
    </div>

  </nav>
</aside>

  )
}

export default SideBarLayout;
