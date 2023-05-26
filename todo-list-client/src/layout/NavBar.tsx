import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const NavBar: React.FC<{}> = () => {
  return (
    <header>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 ">
        <div className="px-4 flex items-center justify-between">
          {/* LOGO  */}
          <div className="flex w-full items-center relative">
            <FontAwesomeIcon className="text-2xl text-gray-800 mr-2" icon={faCheckCircle} />
            <span className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-800">TodoList</span>
          </div>
          {/* Navigation  */}
          <div className="">
            <Link to="/newTodoList">Nouvelle Todo Liste</Link>
          </div>

          {/* Todos count  */}
          <div className="">
            <Link to="/newTodoList">Nouvelle Todo Liste</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
