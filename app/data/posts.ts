export interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  date: string;
  sections: {
    title: string;
    content: string;
    subsections?: {
      title: string;
      content: string;
    }[];
  }[];
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    content: 'Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications.',
    category: 'Web Development',
    author: 'Harry',
    date: '02/03/2024',
    sections: [
      {
        title: 'Introduction to Next.js',
        content: 'Next.js is a powerful React framework that enables you to create full-stack web applications. It provides a great developer experience with features like server-side rendering, static site generation, and more.',
        subsections: [
          {
            title: 'Why Choose Next.js?',
            content: 'Next.js offers several advantages including automatic code splitting, optimized performance, and built-in routing capabilities.'
          },
          {
            title: 'Key Features',
            content: 'Some of the key features include server-side rendering, static site generation, API routes, and built-in CSS support.'
          }
        ]
      },
      {
        title: 'Setting Up Next.js',
        content: 'To get started with Next.js, you\'ll need to set up your development environment. Here are the steps:',
        subsections: [
          {
            title: 'Installation',
            content: 'You can create a new Next.js app using create-next-app, which sets up everything automatically for you.'
          },
          {
            title: 'Project Structure',
            content: 'Next.js provides a clear project structure with directories for pages, components, and public assets.'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'The Power of React Hooks',
    content: 'React Hooks have revolutionized the way we write React components, allowing us to use state and other React features without writing a class.',
    category: 'React',
    author: 'Sally',
    date: '02/04/2024',
    sections: [
      {
        title: 'Understanding React Hooks',
        content: 'React Hooks are functions that allow you to "hook into" React state and lifecycle features from function components.',
        subsections: [
          {
            title: 'Basic Hooks',
            content: 'useState and useEffect are the most commonly used hooks that handle state and side effects respectively.'
          },
          {
            title: 'Custom Hooks',
            content: 'You can create your own hooks to reuse stateful logic between different components.'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'CSS-in-JS: A Modern Approach to Styling',
    content: 'CSS-in-JS is a styling technique where JavaScript is used to style components. This approach offers several benefits, including scoped styles and dynamic styling.',
    category: 'CSS',
    author: 'John',
    date: '02/05/2024',
    sections: [
      {
        title: 'Benefits of CSS-in-JS',
        content: 'CSS-in-JS provides scoped styling, dynamic capabilities, and better integration with component logic.',
        subsections: [
          {
            title: 'Scoped Styles',
            content: 'CSS-in-JS ensures that styles are scoped to specific components, preventing style conflicts.'
          }
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Mastering TypeScript for React Development',
    content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. When used with React, it provides enhanced developer experience and catches errors early.',
    category: 'TypeScript',
    author: 'Jane',
    date: '02/06/2024',
    sections: [
      {
        title: 'TypeScript Basics',
        content: 'Learn the fundamental concepts of TypeScript and how it enhances JavaScript development.',
        subsections: [
          {
            title: 'Type Systems',
            content: 'Understanding TypeScript\'s type system and how it helps prevent runtime errors.'
          }
        ]
      }
    ]
  },
  {
    id: '5',
    title: 'Server-Side Rendering vs. Static Site Generation',
    content: 'Understanding the differences between server-side rendering (SSR) and static site generation (SSG) is crucial for optimizing your Next.js application.',
    category: 'Web Development',
    author: 'Mike',
    date: '02/07/2024',
    sections: [
      {
        title: 'Comparing SSR and SSG',
        content: 'Learn the key differences between Server-Side Rendering and Static Site Generation.',
        subsections: [
          {
            title: 'When to Use SSR',
            content: 'Server-Side Rendering is ideal for dynamic content that needs to be updated frequently.'
          },
          {
            title: 'When to Use SSG',
            content: 'Static Site Generation is perfect for content that doesn\'t change often and needs maximum performance.'
          }
        ]
      }
    ]
  }
]

