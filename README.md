# @citadel-guilds/sdk

Public Guild SDK — TypeScript interfaces and adapter contracts for Citadel Nexus guilds.

## Install

```

npm install @citadel-guilds/sdk

```

## Usage

```

import { GuildManifest, GuildContext, MockEventBus } from '@citadel-guilds/sdk';

const manifest: GuildManifest = {

id: 'my-guild',

name: 'My Guild',

version: '1.0.0',

eventNamespace: '[citadel.my](http://citadel.my)-guild',

};

```

This package defines the public contract (adapters, types). The host injects concrete implementations at runtime.

## Testing

```

npm install

npm run test

```

## License

MIT — Copyright (c) 2026 Citadel Nexus Inc
