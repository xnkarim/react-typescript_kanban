import React, { useState } from 'react';
import TaskList from '../../components/TaskList';
import { BoardInfo } from '../../types';

const Board = () => {
    const [boards, setboards] = useState<BoardInfo[]>([
        {
            id: 1,
            title: 'Board',
            tasks: [
                {
                    id: 1,
                    text: 'Hello1'
                },
                {
                    id: 2,
                    text: 'Hello2'
                }
            ]
        },
        {
            id: 2,
            title: 'Board2',
            tasks: [
                {
                    id: 3,
                    text: 'Hello3'
                },
                {
                    id: 4,
                    text: 'Hello4'
                }
            ]
        }
    ])

    return (
        <div className="board-wrapper">
            <div className="board__header">
                <div className="board__select">
                    Studio Board
    </div>

                <div className="board__members">
                    <ul className="members-list">
                        <li className="members-list__item"></li>
                        <li className="members-list__item"></li>
                        <li className="members-list__item"></li>
                        <li className="members-list__item"></li>
                    </ul>
                    <button className="add-new-member"></button>
                </div>
            </div>
            <div className="boards-list">
                {
                    boards.map(({ id, title, tasks }) => <TaskList key={id} title={title} tasks={tasks} />)
                }
            </div>
            <button className="float-btn">+</button>
        </div>
    );
}

export default Board;