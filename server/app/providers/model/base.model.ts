import { IModificationNote } from '../interface/modification-note.interface';

export class BaseModel {
  modificationNote?: IModificationNote[];

  constructor() {}

  hasEnoughParams(params?): boolean {
    return true;
  }
}