import { resolve as resolvePath } from 'path';
import { expect } from 'chai';
import getDirectoryContent from 'vamtiger-get-directory-content';
import bash from 'vamtiger-bash';
import createDirectory from '../..';

describe('vamtiger-create-directory should', function () {
    it('create a directory for a defined path', async function () {
        const directoryName = 'directory-to-create';
        const directoryPath = resolvePath(
            __dirname, 
            directoryName
        );
        const create = await createDirectory(directoryPath);
        const directoryContent = new Set(await getDirectoryContent(__dirname));
        const removeDirectory = bash(`rm -rf ${directoryPath}`);
        
        expect(directoryContent.has(directoryName)).to.be.ok;
    })
})