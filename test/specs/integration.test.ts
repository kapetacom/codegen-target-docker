import { describe, test, beforeEach, expect } from '@jest/globals';
import { BlockDefinition } from '@kapeta/schemas';
import DockerTarget from '../../src/index';
import { CodegenHelpers, BlockCodeGenerator } from '@kapeta/codegen';
import Path from 'path';

describe('blocks', () => {
    let target: DockerTarget;

    beforeEach(() => {
        target = new DockerTarget({});
    });

    test('frontend', async () => {
        const basedir = Path.resolve(__dirname, '../resources/examples/frontend');
        const data = require('../resources/examples/frontend.kapeta.yml') as BlockDefinition;

        return CodegenHelpers.testCodeGenFor(target, new BlockCodeGenerator(data), basedir);
    });

    test('backend', async () => {
        const basedir = Path.resolve(__dirname, '../resources/examples/backend');
        const data = require('../resources/examples/backend.kapeta.yml') as BlockDefinition;

        return CodegenHelpers.testCodeGenFor(target, new BlockCodeGenerator(data), basedir);
    });

});
