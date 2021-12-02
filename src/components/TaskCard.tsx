type TaskCardProps = {
    text: string
}

const TaskCard = ({ text }: TaskCardProps) => {
    return (
        <div className="task-card" draggable={true}>
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
                {/* <div className="left-badges">
                    <div className="comments">
                        <button>
                            <img className="comments__icon" src="./images/comment.svg" alt="comment" />
                        </button>
                        <span className="comments__count">2</span>
                    </div>
                    <div className="attachements">
                        <button>
                            <img className="attachments__icon" src="./images/attachment.svg" alt="attachment" />
                        </button>
                        <span className="attachments__count">3</span>
                    </div>
                </div> */}
                <div className="right-badges">
                    <button className="add-new-member">+</button>
                    <div className="card-author">
                        <img src="./images/avatar.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;