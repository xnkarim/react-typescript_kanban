export type Task = {
    id: string,
    text: string
}

export type Column = {
    id: string,
    title: string,
    tasks: Task[]
}

export type Columns = {
    [key: string]: Column
}