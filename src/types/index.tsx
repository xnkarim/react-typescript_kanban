export type Task = {
    id: number,
    text: string
}

export type BoardInfo = {
    id: number,
    title: string,
    tasks: Task[]
}