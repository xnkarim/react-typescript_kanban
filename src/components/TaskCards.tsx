import React, { FC } from "react";
import { Draggable, DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { Task } from "src/types";
import TaskCard from "./TaskCard";

type TaskCardsProps = {
    tasks: Task[],
    columnId: string,
    editTaskText: (columnId: string, taskId: string, text: string) => void
    deleteTask: (columnId: string, taskId: string) => void
}

const TaskCards: FC<TaskCardsProps> = ({ tasks, editTaskText, columnId, deleteTask }) => {
    return (
        <>
            {tasks.map(({ id, text }: Task, index: number) => (
                <Draggable key={id} draggableId={id} index={index}>
                    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                                ...provided.draggableProps.style,
                                marginBottom: 8
                            }}
                        >
                            <TaskCard
                                text={text}
                                isDragging={snapshot.isDragging}
                                editTaskText={(text) => editTaskText(columnId, id, text)}
                                deleteTask={() => deleteTask(columnId, id)}
                            />
                        </div>
                    )}
                </Draggable>
            ))}
        </>
    );
}

export default TaskCards;