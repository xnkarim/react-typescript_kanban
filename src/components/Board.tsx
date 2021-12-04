import React, { FC } from 'react';
import { Boards, Task } from "../types";
import { Droppable } from 'react-beautiful-dnd';
import TaskCards from './TaskCards';

type BoardProps = {
    id: string,
    title: string,
    tasks: Task[],
}

const Board: FC<BoardProps> = ({ id, title, tasks }) => {
    return (
        <Droppable droppableId={id}>
            {(provided, snapshot) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="board"
                >
                    <div className="task-list">
                        <div className="task-list__header">
                            <h3>{title}</h3>
                        </div>
                        <div className="task-cards">
                            <TaskCards tasks={tasks} />
                            {provided.placeholder}
                        </div>
                    </div>
                </div>
            )}
        </Droppable>
    );
}

export default Board;