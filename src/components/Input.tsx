import React, { useContext, useEffect, useState } from "react";
import { ContextList, Task } from "../context/ContextList";

import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListTask from "./ListTask";
import { notifyAddTask, notifyRemoveTask } from "../utils/notify";
import DropdownMenuDemo from "./Popover";

export default function Input() {
  const [newTask, setAddNewTask] = useState("");
  const { InsertTaskOnList, RemoveTaskOnList } = useContext(ContextList);
  const [tasks, setTask] = useState<Task[]>([]);

  function handleNewtask() {
    if (newTask.trim() !== "") {
      const newObjectTask: Task = {
        id: Math.random(),
        title: newTask,
      };
      setTask([...tasks, newObjectTask]);
      InsertTaskOnList(newObjectTask);
      setAddNewTask("");
      notifyAddTask("Sua nova tarefa foi adicionada na lista!");
    }
  }

  function handleRemoveTask(id: number) {
    setTask(tasks.filter((task) => task.id !== id));
    RemoveTaskOnList(id);
    notifyRemoveTask("Tarefa removida");
  }

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTask(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-center gap-3 mt-5 mb-5 ">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <input
          type="text"
          placeholder="Digite uma tarefa"
          className="rounded-lg border p-2 w-96 text-black"
          value={newTask}
          onChange={(e) => setAddNewTask(e.target.value)}
        />
        <button
          onClick={handleNewtask}
          className="p-2 rounded-lg text-white bg-green-500 font-bold  hover:scale-110 duration-200"
        >
          Adicionar
        </button>
        <DropdownMenuDemo />
      </div>

      <div className="flex items-center justify-center flex-col border p-10 w-[550px] m-auto rounded-lg">
        {tasks?.map((task) => (
          <ListTask
            key={task.id}
            task={task}
            onRemove={() => handleRemoveTask(task.id)}
          />
        ))}
      </div>
    </>
  );
}
