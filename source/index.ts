import { mkdir } from 'fs';
import { promisify } from 'util';

export default promisify(mkdir);