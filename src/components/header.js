import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

function Header() {
  const data = useStaticQuery(graphql`
    query {
      strapiMenuBar {
        Logo {
          localFile {
            url
          }
        }
        item01
        item02
        item03
        item04
        item05
      }
    }
  `);

  return (
    <>
      <div className="flex flex-row justify-between items-center px-6 py-4 bg-gray-50 md:hidden">
        {/* Menu Bar for Mobile Phone */}
        <div>
          <img
            className="h-8"
            src={data.strapiMenuBar.Logo.localFile.url}
            alt="Classic Group Logo"
          />
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="hidden md:flex flex-row justify-between items-center py-6 px-6 lg:px-8 bg-gray-50">
        {/* Menu Bar for Tablet and Desktop */}
        <div>
          <img
            className = "h-8 lg:h-12"
            src={data.strapiMenuBar.Logo.localFile.url}
            alt="Classic Group Logo"
          />
        </div>
        <div>
          <ul className = "flex flex-row space-x-6">
            <li className = "uppercase text-sm lg:text-base text-gray-400 hover:text-red-500">{data.strapiMenuBar.item01}</li>
            <li className = "uppercase text-sm lg:text-base text-gray-400 hover:text-red-500">{data.strapiMenuBar.item02}</li>
            <li className = "uppercase text-sm lg:text-base text-gray-400 hover:text-red-500">{data.strapiMenuBar.item03}</li>
            <li className = "uppercase text-sm lg:text-base text-gray-400 hover:text-red-500">{data.strapiMenuBar.item04}</li>
            <li className = "uppercase text-sm lg:text-base text-gray-400 hover:text-red-500">{data.strapiMenuBar.item05}</li>
          </ul>
        </div>
        <div className = "flex flex-row space-x-4 xl:space-x-6">
          {/* Mail Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 lg:h-6 lg:w-6 text-gray-500 hover:text-red-700"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>

          {/* Dark Mode Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 lg:h-6 lg:w-6 text-gray-500 hover:text-red-700"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Header;
