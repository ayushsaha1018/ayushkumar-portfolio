import {defineField, defineType} from 'sanity'

export const info = defineType({
  name: 'info',
  title: 'Information about youself',
  type: 'document',
  options: {
    singleton: true,
  },
  fields: [
    defineField({
      name: 'name',
      title: 'Your Name',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'initials',
      title: 'Initials',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'description',
      title: 'Description in short',
      type: 'text',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: 'email',
            invert: false,
          },
        ),
    }),
    defineField({
      name: 'phoneNo',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'Linkedin Profile Link',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'Github Profile Link',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Profile Link',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter Profile Link',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube Channel Link',
      type: 'url',
    }),
  ],
})
