import React, { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Task } from "src/types";
import TaskCard from "./TaskCard";

type TaskCardsProps = {
    tasks: Task[],
}

const TaskCards: FC<TaskCardsProps> = ({ tasks }) => {
    return (
        <>
            {tasks.map(({ id, text }: Task, index: number) => (
                <Draggable key={id} draggableId={id} index={index}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                                ...provided.draggableProps.style,
                                marginBottom: 8
                            }}
                        >
                            <TaskCard text={text} isDragging={snapshot.isDragging} />
                        </div>
                    )}
                </Draggable>
            ))}
        </>
    );
}

export default TaskCards;