import {orderRankField} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

export const education = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'instituteName',
      title: 'Institution Name',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    }),
    defineField({
      name: 'degree',
      title: 'Degree Name',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'pointers',
      title: 'Description',
      type: 'array',
      validation: (Rule) => [Rule.required()],
      of: [
        {
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'instituteWebsite',
      title: 'Institution Website Link',
      type: 'url',
    }),
    orderRankField({type: 'education'}),
  ],
})
