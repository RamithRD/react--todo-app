import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo"

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDeletePressed: (id: number) => void;
}

export default function TodoItem({todo, onCompletedChange, onDeletePressed}: TodoItemProps) {
    return (
        <div className="flex items-center gap-1">
            <label className="flex items-center gap-2 border rounder-md p-2 border-grey-400 bg-white hover:bg-slate-50 grow">
                <input 
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                    className="scale-125"
                />
                <span className={todo.completed ? "line-through text-grey-400" : ""}>
                    {todo.title}
                </span>
            </label>

            <button 
                    className="border p-2 bg-red-500 hover:bg-red-300"
                    type="button"
                    onClick={ () => onDeletePressed(todo.id)}
                >
                    <Trash2 size={20} className="text-grey-500"/>
                </button>
        </div>
    )
}