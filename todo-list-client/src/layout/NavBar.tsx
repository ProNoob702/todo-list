import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Badge, Button, Navbar, Typography, useSelect } from "@material-tailwind/react";
import { IAppState } from "../redux-store/store";
import { getAllTodoListsCount } from "../redux-store/selectors/todoList.selectors";
import { useSelector } from "react-redux";

export const NavBar: React.FC<{}> = () => {
  return (
    <header>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center">
            <FontAwesomeIcon className="text-2xl text-gray-800 mr-2" icon={faCheckCircle} />
            <Typography variant="h6">Todo List</Typography>
          </div>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <Link to="/add-todo">
                  <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                    Nouvelle Todo Liste
                  </Typography>
                </Link>
                <TodosCount />
              </ul>
            </div>
          </div>
        </div>
      </Navbar>
    </header>
  );
};

const TodosCount = () => {
  const todosCount = useSelector((state: IAppState) => getAllTodoListsCount(state));

  return (
    <Link to="/">
      <Badge content={todosCount || 0} withBorder>
        <Button>Mes todos listes</Button>
      </Badge>
    </Link>
  );
};
