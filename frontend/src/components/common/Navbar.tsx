import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();


  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="top-0 left-0 w-full bg-black shadow-xl z-50 backdrop-blur-sm bg-opacity-90 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <Link
            to="/"
            className="flex items-center space-x-2 group"
          >
            <div className="bg-white bg-opacity-10 p-2 rounded-lg group-hover:bg-opacity-20 transition-all">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Skill Link
            </span>
          </Link>


          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/login"
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${isActive('/login') ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}`}
            >
              Iniciar Sesión
              {isActive('/login') && (
                <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-white rounded-full" />
              )}
            </Link>

            <Link
              to="/register"
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${isActive('/register') ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}`}
            >
              Registrarse
              {isActive('/register') && (
                <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-white rounded-full" />
              )}
            </Link>

            <Link
              to="/register"
              className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Prueba Gratis
            </Link>
          </div>


          <button className="md:hidden text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;