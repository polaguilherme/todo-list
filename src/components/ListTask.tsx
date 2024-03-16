import { Trash, CheckCircle } from "phosphor-react";
import { Task } from "../context/ContextList";
import { useState } from "react";
import { notifyAddTask } from "../utils/notify";

interface ListTaskProps {
  task: Task;
  onRemove: () => void;
}

export default function ListTask({ task, onRemove }: ListTaskProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleMarkStatusTask() {
    setIsCompleted(!isCompleted);
    notifyAddTask("Tarefa concluida!");
  }

  return (
    <div className="border w-[500px] p-2 h-14 rounded-lg  flex justify-between mb-2 cursor-pointer hover:scale-105 hover:bg-gray-700 hover: hover:border-black transition duration-200">
      <div className="flex gap-3 items-center">
        <div
          className={`${
            isCompleted ? "bg-green-500" : "bg-amber-500"
          } transition-colors duration-200 w-3 h-3 rounded-full`}
        />
        <p>{task.title}</p>
      </div>
      <div className="flex gap-2 ">
        {}
        <button
          onClick={onRemove}
          className="hover:text-red-500 transition-colors duration-200 hover:scale-110"
        >
          <Trash size={24} />
        </button>
        <button
          onClick={handleMarkStatusTask}
          className="hover:text-green-500  transition-colors duration-200 hover:scale-110"
        >
          <CheckCircle size={24} />
        </button>
      </div>
    </div>
  );
}
