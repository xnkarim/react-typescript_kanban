import React, { FC } from 'react';
import cn from 'classnames';
import { ReactComponent as Comment } from 'src/assets/icons/comment.svg';
import { ReactComponent as Attachment } from 'src/assets/icons/attachment.svg';
import AvatarPng from 'src/assets/icons/avatar.png';

type TaskCardProps = {
    text: string,
    isDragging: boolean
}

const TaskCard: FC<TaskCardProps> = ({ text, isDragging }) => {
    return (
        <div className={cn("task-card", {
            "task-card--dragging": isDragging
        })} draggable={true}>
            <div className="task-card__header">
                <div className="task-priority">
                    Low priority
                            </div>
            </div>
            <div className="task-card__body">
                <p className="task-text">
                    {text}
                </p>
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