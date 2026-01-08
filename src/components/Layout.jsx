import React from 'react';

/**
 * Layout Component: Provides the overall structure (Header, Main Content, Footer)
 * and sets the global styling for the application using Tailwind CSS.
 */
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans antialiased">
      
      {/* Header/Navigation Bar */}
      <header className="sticky top-0 z-20 bg-white dark:bg-slate-800 shadow-xl border-b border-slate-200 dark:border-slate-700/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400">
            Frontend Architect
          </h1>
          <nav className="hidden sm:block">
            <ul className="flex space-x-6 font-medium">
              <li className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition duration-150 ease-in-out">Home</li>
              <li className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition duration-150 ease-in-out">Services</li>
              <li className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition duration-150 ease-in-out">About</li>
              <li className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition duration-150 ease-in-out">Contact</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} Modern Architecture. Built with Vite, React, and Tailwind CSS.</p>
          <p className="mt-1 text-xs">Designed by Senior Frontend Architect.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;