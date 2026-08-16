import { Bell, CaretDown, MagnifyingGlass } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Rayo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("Usuario");
  const [showDropdown, setShowDropdown] = useState(false);
  const [userImage, setUserImage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("username");
    let image = localStorage.getItem("userImage");

    if (!image) {
      image = "https://i.pravatar.cc/150?img=3";
      localStorage.setItem("userImage", image);
    }

    setIsLoggedIn(!!token);
    if (name) setUsername(name);
    if (image) setUserImage(image);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userImage");
    navigate("/login");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y navegación */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-900 hover:text-indigo-600 transition-colors"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1.5 rounded-lg">
                <img
                  src={logo}
                  alt="Logo Skill Link"
                  className="h-5 w-5 filter brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Skill Link
              </span>
            </Link>

            {isLoggedIn && (
              <nav className="hidden md:flex items-center space-x-8 ml-10">
                <Link
                  to="/"
                  className={`text-sm font-medium ${
                    location.pathname === "/"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-700 hover:text-indigo-600 transition-colors"
                  }`}
                >
                  Inicio
                </Link>
                <Link
                  to="/my-learning"
                  className={`text-sm font-medium ${
                    location.pathname === "/my-learning"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-700 hover:text-indigo-600 transition-colors"
                  }`}
                >
                  Mi aprendizaje
                </Link>
                <Link
                  to="/courses-page"
                  className={`text-sm font-medium ${
                    location.pathname === "/courses-page"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-700 hover:text-indigo-600 transition-colors"
                  }`}
                >
                  Cursos
                </Link>
                <Link
                  to="/desafios"
                  className={`text-sm font-medium ${
                    location.pathname === "/desafios"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-700 hover:text-indigo-600 transition-colors"
                  }`}
                >
                  Desafíos
                </Link>
                <Link
                  to="/proyectos"
                  className={`text-sm font-medium ${
                    location.pathname === "/proyectos"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-700 hover:text-indigo-600 transition-colors"
                  }`}
                >
                  Proyectos
                </Link>
              </nav>
            )}
          </div>

          {/* Barra de búsqueda y acciones */}
          <div className="flex items-center space-x-4">
            {/* Barra de búsqueda */}
            <form onSubmit={handleSearch} className="hidden sm:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlass size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar cursos..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>

            {isLoggedIn ? (
              <>
                {/* Notificaciones */}
                <button
                  type="button"
                  className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
                >
                  <span className="sr-only">Notificaciones</span>
                  <Bell size={20} />
                </button>

                {/* Perfil dropdown */}
                <div className="relative ml-3">
                  <button
                    type="button"
                    className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-full"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <div
                      className="h-8 w-8 rounded-full bg-cover bg-center border-2 border-indigo-100"
                      style={{
                        backgroundImage: `url(${
                          userImage || "https://lh3.googleusercontent.com/a-/default-user.png"
                        })`,
                      }}
                    />
                    <CaretDown
                      size={16}
                      className={`text-gray-500 transition-transform ${
                        showDropdown ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showDropdown && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                      <div className="py-1">
                        <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                          <p className="font-medium">Hola, {username}</p>
                        </div>
                        <Link
                          to="/mi-perfil"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                          onClick={() => setShowDropdown(false)}
                        >
                          Mi perfil
                        </Link>
                        <button
                          type="button"
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        >
                          Cerrar sesión
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className={`text-sm font-medium ${
                    location.pathname === "/login"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-700 hover:text-indigo-600 transition-colors"
                  }`}
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/create-account"
                  className={`text-sm font-medium ${
                    location.pathname === "/create-account"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-700 hover:text-indigo-600 transition-colors"
                  }`}
                >
                  Registrarse
                </Link>
                <button
                  type="button"
                  onClick={() => navigate("/create-account")}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all"
                >
                  Prueba Gratis
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
