import { toast } from "react-toastify";

export const notifyAddTask = (text: string) => toast.success(text);
export const notifyRemoveTask = (text: string) => toast.warning(text);
export const notifyEditTask = (text: string) => toast.info(text);
