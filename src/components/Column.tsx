import React, { FC } from 'react';
import { Task } from "../types";
import { Draggable, DraggableProvided, Droppable, DroppableProvided } from 'react-beautiful-dnd';
import TaskCards from './TaskCards';
import { TASK } from 'src/constants';

type ColumnProps = {
    id: string,
    title: string,
    tasks: Task[],
    index: number,
    addTask: (columnId: string) => void,
    editTaskText: (columnId: string, taskId: string, text: string) => void
    deleteTask: (columnId: string, taskId: string) => void
}

const Column: FC<ColumnProps> = ({ id, title, tasks, index, addTask, editTaskText, deleteTask }) => {
    return (
        <Draggable key={id} draggableId={id} index={index}>
            {(provided: DraggableProvided) => (
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
                                    <TaskCards
                                        columnId={id}
                                        tasks={tasks}
                                        editTaskText={editTaskText}
                                        deleteTask={deleteTask}
                                    />
                                    {provided.placeholder}
                                </div>
                                <div className="task-list__footer">
                                    <button onClick={() => addTask(id)} className="add-new-task">Add task +</button>
                                </div>
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>

    );
}

export default React.memo(Column);