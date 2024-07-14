import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {singletonTools} from 'sanity-plugin-singleton-tools'

export default defineConfig({
  name: 'default',
  title: 'portfolio-new',

  projectId: 'obkexbcu',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), singletonTools()],

  schema: {
    types: schemaTypes,
  },
})
