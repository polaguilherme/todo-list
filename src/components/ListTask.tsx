import { Trash, CheckCircle } from "phosphor-react";
import { ContextList, Task } from "../context/ContextList";
import { useContext, useState } from "react";
import { notifyAddTask } from "../utils/notify";
import Separators from "./Separator";
import FormEdit from "./FormEdit";

export interface ListTaskProps {
  task: Task;
  onRemove: () => void;
}

export default function ListTask({ task, onRemove }: ListTaskProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDisabledVerify, setIsDisabledVerify] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const { EditTask } = useContext(ContextList);

  function handleMarkStatusTask() {
    setIsCompleted(true);
    setIsDisabledVerify(!isDisabledVerify);
    notifyAddTask("Tarefa" + " " + task.title + " " + "concluída!");
  }

  function handleIdTask(newTitle: string) {
    EditTask(task.id, newTitle);
    setIsEditMode(false);
  }

  return (
    <div className="border w-[500px] p-2 h-14 rounded-lg  flex justify-between mb-2 cursor-pointer hover:scale-105 hover:bg-gray-700 hover: hover:border-white transition duration-200">
      <div className="flex gap-3 items-center">
        <div
          className={`${
            isCompleted ? "bg-green-500" : "bg-amber-500"
          } transition-colors duration-200 w-3 h-3 rounded-full`}
        />
        <p>{task.title}</p>
      </div>

      <div className="flex gap-1 ">
        <button
          onClick={onRemove}
          className="hover:text-red-500 transition-colors duration-200 hover:scale-110"
        >
          <Trash size={24} />
        </button>
        <Separators />

        {isCompleted ? (
          <button className="hover:text-blue-500 transition-colors duration-200 hover:scale-110">
            <FormEdit key={task.id} task={task} onSave={handleIdTask} />
          </button>
        ) : (
          <button
            onClick={handleMarkStatusTask}
            className="hover:text-green-500 transition-colors duration-200 hover:scale-110"
            disabled={false}
          >
            <CheckCircle size={24} />
          </button>
        )}
      </div>
    </div>
  );
}
