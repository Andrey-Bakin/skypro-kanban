import { useContext } from "react";
import { TaskContext } from "../task";

export function useTaskContext() {
    return useContext(TaskContext);
    
}