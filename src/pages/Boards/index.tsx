import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Board from 'src/components/Board';
import { BoardsList, Task } from 'src/types';

const Boards = () => {
    const [boards, setBoards] = useState<BoardsList>(
        {
            "board_1": {
                title: 'Board',
                tasks: [
                    {
                        id: '1',
                        text: 'Hello1'
                    },
                    {
                        id: '2',
                        text: 'Hello2'
                    }
                ]
            },
            "board_2": {
                title: 'Board2',
                tasks: [
                    {
                        id: '3',
                        text: 'Hello3'
                    },
                    {
                        id: '4',
                        text: 'Hello4'
                    }
                ]
            },
            "board_3": {
                title: 'Board3',
                tasks: [
                    {
                        id: '5',
                        text: 'Hello5'
                    },
                    {
                        id: '6',
                        text: 'Hello6'
                    }
                ]
            }
        })

    const reorder = (tasks: Task[], startIndex: number, endIndex: number) => {
        const tasksCopy = Array.from(tasks);
        const [removed] = tasksCopy.splice(startIndex, 1);
        tasksCopy.splice(endIndex, 0, removed);

        return tasksCopy;
    };

    const move = (source: Task[], destination: Task[], droppableSource: any, droppableDestination: any) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);

        const [removed] = sourceClone.splice(droppableSource.index, 1);
        destClone.splice(droppableDestination.index, 0, removed);

        return [sourceClone, destClone];
    };

    const onDragEnd = (result: any) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const reorderedTasks = reorder(
                boards[source.droppableId].tasks,
                source.index,
                destination.index
            );

            setBoards((boards: BoardsList) => {
                const boardsCopy = Object.assign({}, boards);
                boardsCopy[source.droppableId].tasks = reorderedTasks;
                return boardsCopy;
            });
        } else {
            const [newSource, newDest] = move(
                boards[source.droppableId].tasks,
                boards[destination.droppableId].tasks,
                source,
                destination
            );

            setBoards((boards: BoardsList) => {
                const boardsCopy = Object.assign({}, boards);
                boardsCopy[source.droppableId].tasks = newSource;
                boardsCopy[destination.droppableId].tasks = newDest;
                return boardsCopy;
            })
        }
    }

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
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="boards-list">
                    {
                        Object.entries(boards).map(([id, { title, tasks }]) => <Board key={id} id={id} title={title} tasks={tasks} />)
                    }
                </div>
            </DragDropContext>
            <button className="float-btn">+</button>
        </div>
    );
}

export default Boards;