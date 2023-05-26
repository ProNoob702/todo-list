import { Button, Input, Typography } from "@material-tailwind/react";
import { AppLayout } from "../../layout/Layout";
import { useNavigate } from "react-router-dom";
import { useTasksFields } from "./useTasksFields";
import { useTodoListMananger } from "../../hooks/todoList.hooks";
import { useState } from "react";
import { Notify } from "../../services/toast.service";
import { BackBtn } from "../../components/BackBtn";

const AddTodoItem = () => {
  const navigate = useNavigate();
  const [todoListName, setTodolistName] = useState("");
  const { tasksFields, handleAddField, handleChangeInput, removeField } = useTasksFields();

  const { requestCreateTodoList } = useTodoListMananger();

  const handleAddTodoList = async () => {
    try {
      await requestCreateTodoList({ name: todoListName, tasks: tasksFields.map((x) => x.taskName!) });
      Notify("Todolist ajouter avec succés!", "SUCCESS");
      navigate("/");
    } catch (err: any) {
      Notify(err?.response?.data?.message, "Error");
    }
  };

  return (
    <AppLayout>
      <div className="w-fit mx-auto">
        <div className="flex my-4">
          <BackBtn />
          <Typography className="ml-2" variant="h3">
            Ajouter un todo liste
          </Typography>
        </div>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-6 flex flex-col gap-6">
            <Input size="lg" label="Todolist name" value={todoListName} onChange={(e) => setTodolistName(e.target.value)} />
          </div>
          <div className="mb-4 flex flex-col gap-6">
            {tasksFields.map((field, i) => (
              <div key={i} className="flex align-middle">
                <Input size="lg" label={`task-${i + 1}`} value={field.taskName!} onChange={(e) => handleChangeInput(i, e.target.value)} />
                <Button className="mx-2" onClick={handleAddField}>
                  <Typography variant="h6">+</Typography>
                </Button>
                <Button onClick={() => removeField(i)}>
                  <Typography variant="h6">-</Typography>
                </Button>
              </div>
            ))}
          </div>

          <Button className="mt-6" fullWidth onClick={handleAddTodoList}>
            Valider
          </Button>
        </form>
      </div>
    </AppLayout>
  );
};

export default AddTodoItem;
