import { useEffect, useState } from "react";
import { TodoListItem } from "../../models/todoList";

export const useTasksFields = (todoList?: TodoListItem | null) => {
  const [tasksFields, setTasksFields] = useState<{ taskName: string | null }[]>([{ taskName: "" }]);

  useEffect(() => {
    if (todoList) {
      setupFields();
    }
  }, [todoList]);

  const handleAddField = () => {
    setTasksFields([...tasksFields, { taskName: null }]);
  };

  const removeField = (index: number) => {
    const values = [...tasksFields];
    values.splice(index, 1);
    if (!values.length) {
      values.push({ taskName: "" }); // keep input showing
    }
    setTasksFields(values);
  };

  const handleChangeInput = (index: number, newTaskName: string) => {
    const images = [...tasksFields];
    images[index].taskName = newTaskName;
    setTasksFields(images);
  };

  const setupFields = () => {
    const result: { taskName: string }[] = [];
    const tasks = todoList?.tasks;

    tasks?.forEach((x) => {
      result.push({ taskName: x });
    });

    if (tasks?.length) {
      setTasksFields(result);
    } else {
      setTasksFields([{ taskName: "" }]);
    }
  };

  return {
    tasksFields,
    handleAddField,
    removeField,
    handleChangeInput,
  };
};
