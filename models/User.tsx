import { ObjectId } from 'mongoose';

export interface IUser {
    _id: ObjectId,
    uid: string,
    name: string
}
