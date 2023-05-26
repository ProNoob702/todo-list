export interface TodoListItem {
  id: string;
  name: string;
  tasks: string[];
}

export interface CreateOrUpdateTodoListRequest {
  name: string;
  tasks: string[];
}
