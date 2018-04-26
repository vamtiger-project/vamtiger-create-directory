/// <reference types="node" />
import { mkdir } from 'fs';
declare const createDirectory: typeof mkdir.__promisify__;
export default createDirectory;
