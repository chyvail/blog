/**
 * Sample blog post data for development purposes.
 * This file contains an array of dummy blog posts with properties like title, date, slug, content, and image.
 */

type BlogPost = {
  id: number;
  title: string;
  date: string;
  slug: string;
  content: string;
  image: string;
};

const blogData: BlogPost[] = [
  {
    id: 1,
    title: "What is FrontEnd Development",
    date: "2024-03-09",
    slug: "what-is-frontend-development",
    content:
      "Front-end web development is the development of the graphical user interface of a website through the use of HTML, CSS, and JavaScript so users can view and interact with that website",
    image:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Introduction to CSS Grid Layout",
    date: "2024-03-07",
    slug: "introduction-to-css-grid-layout",
    content:
      "Learn how to create flexible and responsive layouts with CSS Grid Layout, a powerful tool for modern web design.",
    image:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "JavaScript Best Practices",
    date: "2024-03-06",
    slug: "javascript-best-practices",
    content:
      "Explore the best practices and coding conventions for writing clean, efficient, and maintainable JavaScript code.",
    image:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "10 Tips for Effective Web Design",
    date: "2024-03-08",
    slug: "tips-for-effective-web-design",
    content:
      "Improve your web design skills with these 10 practical tips for creating visually appealing and user-friendly websites.",
    image:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "React Hooks Tutorial",
    date: "2024-03-08",
    slug: "react-hooks-tutorial",
    content:
      "Discover how to use React Hooks to add state and lifecycle methods to your functional components.",
    image:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default blogData;
