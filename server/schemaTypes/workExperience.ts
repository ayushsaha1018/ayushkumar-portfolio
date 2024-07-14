import {defineField, defineType} from 'sanity'

export const workExperience = defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
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
      name: 'role',
      title: 'Role',
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
      name: 'companyWebsite',
      title: 'Company Website Link',
      type: 'url',
    }),
  ],
})
