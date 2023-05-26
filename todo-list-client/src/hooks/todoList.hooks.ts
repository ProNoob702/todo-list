import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux-store/store";
import { createTodoList, deleteTodoList, fetchAllTodoLists, fetchTodoListItem, updateTodoList } from "../services/todolist.service";
import { todoListActions } from "../redux-store/slices/todoList.slice";
import { CreateOrUpdateTodoListRequest } from "../models/todoList";

export const useTodoListMananger = () => {
  const dispatch = useDispatch<AppDispatch>();

  const initAllTodosList = async () => {
    const res = await fetchAllTodoLists();
    dispatch(todoListActions.setList(res.data));
  };

  const getTodoListFromApi = async (id: string) => {
    const res = await fetchTodoListItem(id);
    return res.data;
  };

  const requestCreateTodoList = async (data: CreateOrUpdateTodoListRequest) => {
    const res = await createTodoList(data);
    dispatch(todoListActions.addNewItem(res.data));
  };

  const requestUpdateTodoList = async (id: string, data: CreateOrUpdateTodoListRequest) => {
    const res = await updateTodoList(id, data);
    dispatch(todoListActions.updateTodoListItem({ id, newData: res.data }));
  };

  const requestDeleteTodoList = async (id: string) => {
    await deleteTodoList(id);
    dispatch(todoListActions.removeTodoListItem(id));
  };

  return {
    initAllTodosList,
    getTodoListFromApi,
    requestCreateTodoList,
    requestUpdateTodoList,
    requestDeleteTodoList,
  };
};
