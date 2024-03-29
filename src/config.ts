import { setup } from '@skyra/env-utilities';
import * as colorette from 'colorette';

import { NodeEnvironments, mainFolder } from '#lib/utilities/constants';
import { join } from 'node:path';

export function loadConfig(): void {
	process.env.NODE_ENV ??= NodeEnvironments.Dev;

	// Read env var
	setup({ path: join(mainFolder, '.env') });

	// Enable colorette
	colorette.createColors({ useColor: true });
}
