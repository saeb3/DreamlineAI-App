// app/contractor/task/components/TaskList.tsx
import React from "react";
import type { Task } from "./TaskSection";

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {tasks.map(task => (
        <li key={task.id} className="p-3 bg-gray-50 border rounded-lg">
          <h4 className="font-medium">{task.title}</h4>
          {task.description && (
            <p className="text-sm text-gray-600">{task.description}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
