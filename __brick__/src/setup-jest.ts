import 'jest-preset-angular/setup-jest.mjs';

import { env } from '@dotenv-run/core';

env({
  root: '../../..',
  prefix: '{{applicationName.constantCase()}}_',
});
