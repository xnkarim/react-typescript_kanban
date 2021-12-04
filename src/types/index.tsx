export type Task = {
    id: string,
    text: string
}

export type Boards = {
    title: string,
    tasks: Task[]
}

export type BoardsList = {
    [key: string]: Boards
}