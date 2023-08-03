/* eslint-disable prettier/prettier */
export enum RabbitMQ {
    UserQueue = 'User',
    EstateQueue = 'Estates',
}

export enum UserMSG {
    CREATE = 'CREATE_USER',
    FIND_ALL = 'FIND_USERS',
    FIND_ONE = 'FIND_USER',
    UPDATE = 'UPDATE_USER',
    DELETE = 'DELETE_USER',
    VALID_USER = 'VALID_USER'
}

export enum EstateMSG {
    CREATE = 'CREATE_ESTATE',
    FIND_ALL = 'FIND_ESTATES',
    FIND_ONE = 'FIND_ESTATE',
    UPDATE = 'UPDATE_ESTATE',
    DELETE = 'DELETE_ESTATE',
    VALID_ESTATE = 'VALID_ESTATE'
}