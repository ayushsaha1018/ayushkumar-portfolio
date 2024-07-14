import {defineField, defineType} from 'sanity'

export const projects = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Decription',
      type: 'text',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'techUsed',
      title: 'Technologies Used',
      type: 'array',
      of: [
        {
          type: 'string',
          name: 'name',
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
      name: 'website',
      title: 'Website Link',
      type: 'url',
    }),
    defineField({
      name: 'githubRepo',
      title: 'Github Repository Link',
      type: 'url',
    }),
  ],
})
