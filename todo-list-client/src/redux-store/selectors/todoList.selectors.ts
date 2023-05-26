import { createSelector } from "@reduxjs/toolkit";
import { TodoListItem } from "../../models/todoList";
import { IAppState } from "../store";

export const getAllTodoLists = (state: IAppState) => {
  return state.todosState.todolists;
};

export const getAllTodoListsCount = (state: IAppState) => {
  return state.todosState.todolists.length;
};

// export const getMoviesList = (state: IAppState): IMovie[] | null => {
//   return state.moviesState.moviesList;
// };

// export const getFetchingMoviesDoneStatus = (state: IAppState): boolean => {
//   return state.moviesState.moviesList != null;
// };

// export const selectMovieDetails = createSelector(
//   (state: IAppState, movieId: string) => getMoviesList(state),
//   (state: IAppState, movieId: string) => movieId,
//   (moviesList, movieId): IMovie | undefined => {
//     if (moviesList) {
//       return moviesList.find((x) => x.id === movieId);
//     }
//   }
// );

// export const getSearchInputValue = (state: IAppState): string => {
//   return state.moviesState.searchInputValue;
// };
