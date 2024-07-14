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
      name: 'aboutShort',
      title: 'About Yourself in short',
      type: 'text',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'aboutLong',
      title: 'About Yourself in long',
      type: 'text',
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
            name: 'email', // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
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
