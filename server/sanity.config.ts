import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {singletonTools} from 'sanity-plugin-singleton-tools'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'portfolio-new',

  projectId: 'obkexbcu',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) => {
        // Extract all schema types except 'education'
        const otherSchemaTypes = schemaTypes.filter((type) => type.name !== 'projects')

        return S.list()
          .title('Content')
          .items([
            // Add the orderable education list item
            orderableDocumentListDeskItem({type: 'projects', S, context}),
            // Add the rest of the schema types
            ...otherSchemaTypes.map((type) => S.documentTypeListItem(type.name)),
          ])
      },
    }),
    visionTool(),
    singletonTools(),
  ],

  schema: {
    types: schemaTypes,
  },
})
