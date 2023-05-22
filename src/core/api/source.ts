import Axios, { AxiosResponse } from "axios";

const APP_API = "http://localhost:3001";

export const Api = Axios.create({
  baseURL: APP_API,
  headers: {
    Accept: "application/json",
  },
});
/** ********************************************************************
 * Type: Todo
 */
export type TypeAPITodoResponse = {
  id: string;
  title: string;
  completed: boolean;
};

export type TypeAPITodoRequest = {
  id: string;
  title?: string;
  completed?: boolean;
};

export type TypeAPITodoRawResponse = AxiosResponse<TypeAPITodoResponse[]>;

/** ********************************************************************
 * Global Endpoints
 */

export const getTodos = (): Promise<TypeAPITodoRawResponse> => {
  return Api.get("/todos");
};

export const getTodo = ({
  id,
}: TypeAPITodoRequest): Promise<TypeAPITodoRawResponse> => {
  return Api.get(`/todos/${id}`);
};

export const patchTodo = (
  payload: TypeAPITodoRequest
): Promise<TypeAPITodoResponse> => {
  const { id, title, completed } = payload;
  return Api.patch(`/todos/${id}`, { title, completed });
};

export const postTodo = (
  payload: Partial<TypeAPITodoRequest>
): Promise<TypeAPITodoResponse> => {
  const { title, completed } = payload;
  return Api.post(`/todos`, { title, completed });
};

// export const patchTodo = ({
//   id,
// }: TypeAPITodoRequest): Promise<TypeAPITodoResponse> => {
//   return Api.patch(`/todos/${id}`);
// };

export const deleteTodo = ({
  id,
}: TypeAPITodoRequest): Promise<TypeAPITodoResponse> => {
  return Api.delete(`/todos/${id}`);
};
