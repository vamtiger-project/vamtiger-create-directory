import { mkdir } from 'fs';
import { promisify } from 'util';
import * as BlueBird from 'bluebird';

export default promisify && promisify(mkdir) || BlueBird.promisify(mkdir);