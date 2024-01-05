const path = require('path')

module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    '@penx/api',
    '@penx/app',
    '@penx/constants',
    '@penx/db',
    '@penx/hooks',
    '@penx/local-db',
    '@penx/editor',
    '@penx/editor-queries',
    '@penx/editor-shared',
    '@penx/editor-transforms',
    '@penx/editor-types',
    '@penx/editor-common',
    '@penx/editor-composition',
    '@penx/icons',
    '@penx/shared',
    '@penx/model',
    '@penx/context-menu',
    '@penx/service',
    '@penx/serializer',
    '@penx/store',
    '@penx/session',
    '@penx/model-types',
    '@penx/cmdk',
    '@penx/indexeddb',
    '@penx/event',
    '@penx/storage-estimate',
    '@penx/word-count',
    '@penx/blockquote',
    '@penx/divider',
    '@penx/check-list',
    '@penx/auto-format',
    '@penx/paragraph',
    '@penx/list',
    '@penx/image',
    '@penx/file',
    '@penx/link',
    '@penx/bidirectional-link',
    '@penx/table',
    '@penx/database',
    '@penx/dnd-projection',
    '@penx/block-selector',
    '@penx/editor-leaf',
    '@penx/trpc-client',
    '@penx/sync',
    '@penx/unique-id',
    '@penx/extension-list',
    '@penx/worker',
    'uikit',
    'slate-lists',
  ],
}