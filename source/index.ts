import { mkdir } from 'fs';
import { promisify } from 'util';
import * as BlueBird from 'bluebird';

const createDirectory = promisify && promisify(mkdir) || BlueBird.promisify(mkdir);

export default createDirectory;