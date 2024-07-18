# My Portfolio Website

Welcome to my portfolio website project! This repository contains the code for a modern, visually appealing portfolio website built using Next.js, Sanity CMS, Framer Motion, and Tailwind CSS.

## Technologies Used

- **Next.js**: A React framework for server-rendered or statically-exported React applications.
- **Sanity CMS**: A headless CMS used for managing and delivering content.
- **Framer Motion**: A library for creating animations in React.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Features

- **Dynamic Content Management**: Utilizing Sanity CMS for easy content management.
- **Appealing Animations**: Implemented using Framer Motion for a smooth user experience.
- **Custom Styling**: Styled using Tailwind CSS for a modern look.
- **Singleton Schemas**: Used for managing specific types of content, like personal info, efficiently.

## Getting Started

To get a local copy up and running, follow these simple steps.

1. Clone the repo:

```sh
git clone https://github.com/ayushsaha1018/ayushkumar-portfolio.git
```

2. Install NPM packages:

```sh
cd client && pnpm install
cd server && yarn install
```
3. Set up sanity
- Create a sanity project and get the project ID

3. Set Up Clinet env

```js
SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_URL=deployed_link
```

4. Run the development server:

```sh
cd client && npm run dev
cd server && npm run dev
```
