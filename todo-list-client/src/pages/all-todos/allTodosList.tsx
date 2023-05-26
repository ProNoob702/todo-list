import { AppLayout } from "../../layout/Layout";
import { Button } from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { useTodoListMananger } from "../../hooks/todoList.hooks";
import { IAppState } from "../../redux-store/store";
import { getAllTodoLists } from "../../redux-store/selectors/todoList.selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Name", "Tasks count", ""];

const AllTodosList = () => {
  const { requestDeleteTodoList } = useTodoListMananger();

  const allTodos = useSelector((state: IAppState) => getAllTodoLists(state));

  return (
    <AppLayout>
      <div className="my-4 flex">
        <span className="flex-1"></span>
        <Link to={`/add-todo`}>
          <Button>Créer une todo liste</Button>
        </Link>
      </div>
      <Typography variant="h3" className="my-4">
        Tous les todos
      </Typography>
      <Card className="overflow-scroll h-full w-full">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allTodos.map(({ id, name, tasks }, index) => {
              const isLast = index === allTodos.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={id}>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {tasks.length}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <div className="flex">
                      <Link to={`/add-todo/${id}`}>
                        <Typography variant="small" color="blue" className="font-medium mr-3">
                          Edit
                        </Typography>
                      </Link>
                      <Typography as="a" href="#" variant="small" color="blue" className="font-medium" onClick={() => requestDeleteTodoList(id)}>
                        Delete
                      </Typography>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </AppLayout>
  );
};

export default AllTodosList;
