export enum TaskStatus {
    TODO = 'todo',
    IN_PROGRESS = 'in_progress',
    DONE = 'done',
}

export interface Task {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    userId: string;
    createAt: Date;
    updateAt: Date;
    completedAt?: Date;
    isDeleted: boolean;
}