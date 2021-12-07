import React, { useCallback, useState } from 'react';
import { DragDropContext, DraggableLocation, Droppable, DroppableProvided, DropResult } from 'react-beautiful-dnd';
import ColumnComponent from 'src/components/Column';
import { COLUMN, TASK } from 'src/constants';
import { Column, Task } from 'src/types';


const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const listCopy = [...list];
    const [removed] = listCopy.splice(startIndex, 1);
    listCopy.splice(endIndex, 0, removed);

    return listCopy;
};

const move = (source: Task[], destination: Task[], droppableSource: DraggableLocation, droppableDestination: DraggableLocation) => {
    const sourceClone = [...source];
    const destClone = [...destination];

    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);

    return [sourceClone, destClone];
};

const Board = () => {
    const [columns, setColumns] = useState<Column[]>(
        [
            {
                id: 'column_1',
                title: 'column',
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
            {
                id: 'column_1_2',
                title: 'column2',
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
            {
                id: 'column_1_3',
                title: 'column3',
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
        ])

    const addColumn = () => {
        const newLength = columns.length + 1;

        setColumns(columns => [...columns, {
            id: 'column_' + (newLength),
            title: 'column_' + (newLength),
            tasks: []
        }])
    }

    const addTask = useCallback((columnId: string) => {
        const columnsCopy = [...columns];
        const column = columnsCopy.find(col => col.id === columnId);

        if (!column)
            return;

        const newLength = column.tasks.length + 1;

        column.tasks = [...column.tasks, {
            id: `${columnId}_task_${newLength}`,
            text: 'Hello ' + newLength
        }];

        setColumns(columnsCopy);
    }, [columns])

    const onDragEnd = (result: DropResult) => {
        const source: DraggableLocation = result.source;
        const destination: DraggableLocation | undefined = result.destination;

        if (!destination) {
            return;
        }

        if (result.type === TASK) {
            if (source.droppableId === destination.droppableId) {
                const reorderColumn = columns.find(col => col.id === source.droppableId);

                if (!reorderColumn)
                    return;

                const reorderedTasks = reorder(
                    reorderColumn.tasks,
                    source.index,
                    destination.index
                );

                setColumns((columns: Column[]) => {
                    const columnsCopy = [...columns];
                    const reorderColumn = columnsCopy.find(col => col.id === source.droppableId);

                    if (!reorderColumn)
                        return columns;

                    reorderColumn.tasks = reorderedTasks;
                    return columnsCopy;
                });
            } else {
                const sourceColumn = columns.find(col => col.id === source.droppableId);
                const destColumn = columns.find(col => col.id === destination.droppableId);

                if (!sourceColumn || !destColumn)
                    return;

                const [newSourceTasks, newDestTasks] = move(
                    sourceColumn.tasks,
                    destColumn.tasks,
                    source,
                    destination
                );

                setColumns((columns: Column[]) => {
                    const columnsCopy = [...columns];

                    const sourceColumn = columns.find(col => col.id === source.droppableId);
                    const destColumn = columns.find(col => col.id === destination.droppableId);


                    if (!sourceColumn || !destColumn)
                        return columns;

                    sourceColumn.tasks = newSourceTasks;
                    destColumn.tasks = newDestTasks;

                    return columnsCopy;
                })
            }
        } else if (result.type === COLUMN) {
            const reorderedColumns = reorder(
                columns,
                source.index,
                destination.index
            );

            setColumns(reorderedColumns);
        }
    }

    const editTaskText = (columnId: string, taskId: string, text: string) => {
        setColumns((columns: Column[]) => {
            const columnsCopy = [...columns];

            const targetColumn = columns.find(col => col.id === columnId);

            if (!targetColumn)
                return columns;

            const editedTask = targetColumn.tasks.find(task => task.id === taskId);

            if (!editedTask)
                return columns;

            editedTask.text = text;

            return columnsCopy;
        })
    }

    const deleteTask = (columnId: string, taskId: string) => {
        setColumns((columns: Column[]) => {
            const columnsCopy = [...columns];

            const targetColumn = columns.find(col => col.id === columnId);

            if (!targetColumn)
                return columns;

            targetColumn.tasks = targetColumn.tasks.filter(task => task.id !== taskId);

            return columnsCopy;
        })
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
                <Droppable
                    droppableId="board"
                    type={COLUMN}
                    direction="horizontal"
                >
                    {
                        (provided: DroppableProvided) => (
                            <div
                                className="columns"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {
                                    columns.map(({ id, title, tasks }, i) => <ColumnComponent
                                        key={id}
                                        index={i}
                                        id={id}
                                        title={title}
                                        tasks={tasks}
                                        addTask={addTask}
                                        editTaskText={editTaskText}
                                        deleteTask={deleteTask}
                                    />)
                                }
                            </div>
                        )
                    }

                </Droppable>
            </DragDropContext>
            <button onClick={addColumn} className="float-btn">+</button>
        </div>
    );
}

export default Board;