import React, { FC } from 'react';
import { Task } from "../types";
import { Draggable, DraggableProvided, Droppable, DroppableProvided } from 'react-beautiful-dnd';
import TaskCards from './TaskCards';
import { TASK } from 'src/constants';

type ColumnProps = {
    id: string,
    title: string,
    tasks: Task[],
    index: number
}

const Column: FC<ColumnProps> = ({ id, title, tasks, index }) => {
    return (
        <Draggable key={id} draggableId={id} index={index}>
            {(provided:DraggableProvided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="column"
                >
                    <Droppable type={TASK} droppableId={id}>
                        {(provided: DroppableProvided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="task-list">
                                <div className="task-list__header">
                                    <h3>{title}</h3>
                                </div>
                                <div className="task-cards">
                                    <TaskCards tasks={tasks} />
                                    {provided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>

    );
}

export default Column;