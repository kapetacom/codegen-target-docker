/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import { format, Target, GeneratedAsset } from '@kapeta/codegen-target';
import Path from 'path';
import { exec } from '@kapeta/nodejs-process';

export default class DockerTarget extends Target {
    constructor(options?: any) {
        super(options, Path.resolve(__dirname, '../'));
    }

    protected _postProcessCode(filename: string, code: string): string {
        return format(filename, code);
    }

    async postprocess(targetDir: string, files: GeneratedAsset[]): Promise<void> {
        const dockerFileChanged = files.some((file) => file.filename === 'Dockerfile');

        if (dockerFileChanged) {
            console.log('Running docker build in %s', targetDir);
            const child = exec('docker build .', {
                cwd: targetDir,
                windowsHide: true,
            });
            await child.wait();
            console.log('docker file build')
        }
    }
}
