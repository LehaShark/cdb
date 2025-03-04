import { TemporaryFile } from '.';
import { DEFAULT_FLUSH_TICK, DEFAULT_FORCED_FLUSH_AFTER } from './constants';

export type StreamJob = {
    file: TemporaryFile;
    interval: NodeJS.Timeout;
    lastFlush: number;
    stop: () => void
    start: () => void;
    check: () => void;
}


export function StreamJob(this: StreamJob, tf: TemporaryFile) {
    this.file = tf;
}

StreamJob.prototype.start = function (this: StreamJob) {
    console.log("Stream job started");
    this.interval = setInterval(this.check.bind(this), DEFAULT_FLUSH_TICK);
    this.lastFlush = Date.now();
    return this;
}

StreamJob.prototype.stop = function (this: StreamJob) {
    console.log("Stream job ended");
    clearInterval(this.interval);
    return this;
}

StreamJob.prototype.check = async function (this: StreamJob) {
    console.log("Stream job check");
    const end = this.file.vf.getBlockAmount();
    const start = this.file.streamOffset;
    // If no enouth records or no forced time to flush - skip
    if (Date.now() - this.lastFlush < DEFAULT_FORCED_FLUSH_AFTER && end - start <= 8) return;
    // Flush data from writeOnly to readOnly storage
    this.lastFlush = Date.now();
    const data: any[] = await this.file.vf.readRange(start, end);
    for (const value of data) {
        const offset = await this.file.target.getOffset(value);
        if (offset === -1) this.file.target.write(value);
        else this.file.target.writeOffset(offset);
    }
    this.file.streamOffset = end;
}
