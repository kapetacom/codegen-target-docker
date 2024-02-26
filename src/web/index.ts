/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import { ILanguageTargetProvider } from '@kapeta/ui-web-types';

// @ts-expect-error TS doesnt like YML imports
import kapetaDefinition from '../../kapeta.yml';
import packageJson from '../../package.json';

const targetConfig: ILanguageTargetProvider = {
    kind: kapetaDefinition.metadata.name,
    version: packageJson.version,
    title: kapetaDefinition.metadata.title,
    blockKinds: ['kapeta/block-type-frontend', 'kapeta/block-type-service'],
    definition: kapetaDefinition,
};

export default targetConfig;
