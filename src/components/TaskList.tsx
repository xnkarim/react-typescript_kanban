import React from 'react';
import TaskCard from './TaskCard';
import cn from 'classnames';
import { Task } from "../types";

type TaskListProps = {
    title: string,
    tasks: Task[]
}

const TaskList = ({ title, tasks }: TaskListProps) => {
    return (
        <div
            className="board"
            // draggable={true}
            onMouseEnter={() => { console.log('is hover true') }}
            onMouseLeave={() => { console.log('is hover false') }}

        >
            <div className="task-list">
                <div className="task-list__header">
                    <h3>{title || 'Backlog'}</h3>
                </div>
                <div
                    style={{ position: 'relative' }}
                >
                    <div className={cn({
                        'task-cards-hover-wrapper': false
                    })}></div>
                    <div className="task-cards">
                        {
                            tasks.map(({ id, text }) => <TaskCard key={id} text={text} />)
                        }
                    </div>
                </div>
                <div className="task-list__footer">
                    <button className="add-new-task">Add task +</button>
                </div>
            </div>
        </div>
    );
}

export default TaskList;