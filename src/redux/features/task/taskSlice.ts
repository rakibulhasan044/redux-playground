import { RootState } from "@/redux/store";
import { ITask } from "@/types/task.types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[],
    filter: 'All' | "High" | "Medium" | "Low"
}

const initialState: InitialState = {
  tasks: [
    {
      id: "aaaa",
      title: "first task",
      description: "this is the first task",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Low",
    },
    {
      id: "bbbb",
      title: "learn python",
      description: "learn python",
      dueDate: "2025-02-01",
      isCompleted: false,
      priority: "Medium",
    },
    {
      id: "cccc",
      title: "learn machine learning",
      description: "learn machine learning",
      dueDate: "2025-03-01",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter: 'All',
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
}

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
}

export default taskSlice.reducer;
