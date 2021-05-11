import { getBlockSize } from '../entity/util';
import { createMetaFile, MetaFile } from './../meta/index';
import { DeleteStatement, Literal, SelectStatement, TypedIdentifier, UpdateStatement } from './../parser/types';
import { Request } from './../processor/index';

export type Cache = {
    data: Map<string, any>;
    mf: MetaFile;
    getIndices: (value: Literal) => Promise<number[]>;
    write: (statement: Literal) => Promise<any>;
    update: (statement: Request<UpdateStatement>) => Promise<any>;
    read: (statement: Request<SelectStatement>) => Promise<any>;
    delete: (statement: Request<DeleteStatement>) => Promise<any>;
}

function Cache(this: Cache, mf: MetaFile) {
    this.mf = mf;
    this.data = new Map<string, any>();
}

Cache.prototype.getIndices = async function (this: Cache, value: Literal) {
    return this.mf.getIndices(value);
}

Cache.prototype.write = function (this: Cache, req: Literal) {
    console.log(this, "Tries to write cache");
    return this.mf.write(req);
}

Cache.prototype.update = function (this: Cache, req: Request<UpdateStatement>) {
    console.log(this, "Tries to update cache");
}

Cache.prototype.read = function (this: Cache, req: Request<SelectStatement>) {
    console.log(this, "Tries to read cache");
}

Cache.prototype.delete = function (this: Cache, req: Request<DeleteStatement>) {
    console.log(this, "Tries to delete cache");
}


export function getCache(mf: MetaFile): Cache | null {
    return new Cache(mf);
}

export function newCache(req: TypedIdentifier): Cache {
    const metaFile = createMetaFile();
    metaFile.setBlockSize(getBlockSize(req.type));
    return new Cache(metaFile);
}