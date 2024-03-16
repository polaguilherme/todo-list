import React, { createContext, useEffect, useState } from "react";

export interface Task {
  id: number;
  title: string;
}

export interface ContextTypeList {
  tasks: Task[];
  InsertTaskOnList: (task: Task) => void;
  RemoveTaskOnList: (id: number) => void;
  TaskOnAlfabeticOrder: () => void;
  EditTask: (id: number, taskTitle: string) => void;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}

export const ContextList = createContext({} as ContextTypeList);

export function ListContextProvider({ children }: ContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storageTasks = localStorage.getItem("tasks");

    if (storageTasks) {
      setTasks(JSON.parse(storageTasks));
    }
  }, []);

  const InsertTaskOnList = (newTask: Task) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const RemoveTaskOnList = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(updatedTasks);
    localStorage.removeItem(taskId.toString());
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const TaskOnAlfabeticOrder = () => {
    const updatedTasks = [...tasks].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
    console.log("chamado");
  };

  const EditTask = (taskId: number, newTitle: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title: newTitle };
      }
      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const contextValue: ContextTypeList = {
    tasks,
    InsertTaskOnList,
    RemoveTaskOnList,
    TaskOnAlfabeticOrder,
    EditTask,
  };

  return (
    <ContextList.Provider value={contextValue}>{children}</ContextList.Provider>
  );
}
