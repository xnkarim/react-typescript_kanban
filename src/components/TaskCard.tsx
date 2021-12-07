import React, { FC, useRef, useState } from 'react';
import cn from 'classnames';
import { ReactComponent as Comment } from 'src/assets/icons/comment.svg';
import { ReactComponent as Attachment } from 'src/assets/icons/attachment.svg';
import { ReactComponent as Pencil } from 'src/assets/icons/pencil-alt-solid.svg';
import { ReactComponent as Trash } from 'src/assets/icons/trash-alt-solid.svg';
import { ReactComponent as Check } from 'src/assets/icons/check-solid.svg';
import AvatarPng from 'src/assets/icons/avatar.png';

type TaskCardProps = {
    text: string,
    isDragging: boolean,
    editTaskText: (text: string) => void
    deleteTask: () => void
}

const TaskCard: FC<TaskCardProps> = ({ text, isDragging, editTaskText, deleteTask }) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [isEdit, setIsEdit] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    const toggleEdit = () => {
        setIsEdit(isEdit => !isEdit);
        if (!isEdit && inputRef.current)
            inputRef?.current.focus();
    }


    return (
        <div ref={ref} className={cn("task-card", {
            "task-card--dragging": isDragging
        })} draggable={true}>
            <div className="task-card__header">
                <div className="task-priority">
                    Low priority
                            </div>

                <div className="edit-controls">
                    <button
                        className="edit-btn"
                        onClick={deleteTask}
                    >
                        <Trash width={14} color="#ff867c" />
                    </button>
                    <button
                        className="edit-btn"
                        onClick={toggleEdit}
                    >
                        {
                            isEdit
                                ? <Check width={14} color="#00c853" />
                                : <Pencil width={14} color="#8fabfb" />
                        }

                    </button>
                </div>
            </div>
            <div className="task-card__body">
                {
                    isEdit
                        ? <textarea
                            className={cn({
                                'hidden': !isEdit
                            })}
                            ref={inputRef}
                            value={text}
                            onChange={(evt) => editTaskText(evt.target.value)}
                            onBlur={() => setIsEdit(false)}
                        ></textarea>
                        : <p className={cn("task-text", {
                            'hidden': isEdit
                        })}
                        >
                            {text}
                        </p>
                }



            </div>
            <div className="task-card__footer">
                <div className="left-badges">
                    <div className="comments">
                        <button>
                            <Comment />
                        </button>
                        <span className="comments__count">2</span>
                    </div>
                    <div className="attachements">
                        <button>
                            <Attachment />
                        </button>
                        <span className="attachments__count">3</span>
                    </div>
                </div>
                <div className="right-badges">
                    <button className="add-new-member">+</button>
                    <div className="card-author">
                        <img src={AvatarPng} alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;