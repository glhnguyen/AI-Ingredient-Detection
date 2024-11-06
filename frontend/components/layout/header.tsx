import React from "react";

export const Header = () => {
  return (
    <>
      <header className="w-full h-16 flex mt-8 justify-around items-center mb-4">
        <nav className="space-x-4">
          <ul className="list-none m-0 flex items-center p-3.5 border-solid border-black">
            {[
              ["Home", "/"],
              ["Team", "/team"],
            ].map(([title, url]) => (
              <li className="mr-5">
                <a href={url}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
