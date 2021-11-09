

import { Platform } from 'openfin-adapter/src/api/platform';
import { fin } from 'openfin-adapter/src/mock';

export function getCurrentPlatform(): Promise<Platform> {
    return fin.Platform.getCurrent();
}