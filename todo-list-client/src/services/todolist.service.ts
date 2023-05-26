import axios, { AxiosResponse } from "axios";
import { CreateOrUpdateTodoListRequest, TodoListItem } from "../models/todoList";

const baseUrl = "http://localhost:8080";
const baseAdminProducts = `${baseUrl}/todolists`;

export const fetchAllTodoLists = (): Promise<AxiosResponse<TodoListItem[]>> => {
  const url = `${baseAdminProducts}`;
  const config = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  return axios.get(url, config);
};

export const fetchTodoListItem = (id: string): Promise<AxiosResponse<TodoListItem>> => {
  const url = `${baseAdminProducts}/${id}`;
  const config = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  return axios.get(url, config);
};

export const createTodoList = (data: CreateOrUpdateTodoListRequest): Promise<AxiosResponse<TodoListItem>> => {
  const url = `${baseAdminProducts}`;
  const config = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  return axios.post(url, data, config);
};

export const updateTodoList = (id: string, data: CreateOrUpdateTodoListRequest): Promise<AxiosResponse<TodoListItem>> => {
  const url = `${baseAdminProducts}/${id}`;
  const config = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  return axios.put(url, data, config);
};

export const deleteTodoList = (id: string): Promise<AxiosResponse<void>> => {
  const url = `${baseAdminProducts}/${id}`;
  const config = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  return axios.delete(url, config);
};
