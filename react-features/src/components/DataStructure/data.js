export const arrayOfObjects = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 28,
    city: "New York",
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 34,
    city: "Los Angeles",
  },
  {
    id: 3,
    name: "Carol White",
    age: 22,
    city: "Chicago",
  },
];

export const arrayOfStrings = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "Go",
];

export const arrayOfNumbers = [100, 25, 30, 45, 50, 65, 10, 10, 10, 85, 90];

export const arrayOfNestedObjects = [
  {
    projectId: 1,
    name: "Website Redesign",
    team: {
      lead: "Jane Doe",
      members: ["Alex", "Sam", "Jordan"],
    },
    tasks: [
      { task: "Design mockups", completed: true },
      { task: "Develop frontend", completed: false },
    ],
    budget: 50000,
    tags: ["design", "frontend"],
  },
  {
    projectId: 2,
    name: "Mobile App",
    team: {
      lead: "Tom Hardy",
      members: ["Chris", "Pat"],
    },
    tasks: [
      { task: "API integration", completed: true },
      { task: "Testing", completed: true },
    ],
    budget: 75000,
    tags: ["mobile", "ios", "android"],
  },
];

export const objectContainsObjects = {
  user: {
    id: 101,
    name: "John Doe",
    email: "john@example.com",
  },
  settings: {
    theme: "dark",
    notifications: true,
    language: "en",
  },
  preferences: {
    newsletter: false,
    displayMode: "compact",
  },
};

export const objectContainsArrays = {
  id: 501,
  companyName: "Tech Corp",
  employees: ["Alice", "Bob", "Charlie", "Diana"],
  departments: ["Engineering", "Marketing", "Sales", "HR"],
  revenues: [150000, 200000, 180000, 220000],
};

export const objectContainsArrayOfObjects = {
  restaurantName: "Tasty Bites",
  location: "Downtown",
  menu: [
    {
      id: 1,
      dish: "Burger",
      price: 12.99,
      category: "Main Course",
    },
    {
      id: 2,
      dish: "Caesar Salad",
      price: 8.99,
      category: "Appetizer",
    },
    {
      id: 3,
      dish: "Cheesecake",
      price: 6.99,
      category: "Dessert",
    },
  ],
};

export const nestedObjects = {
  course: {
    id: 301,
    title: "Web Development Bootcamp",
    instructor: {
      name: "Sarah Miller",
      email: "sarah@example.com",
      rating: 4.8,
    },
    students: [
      {
        id: 1001,
        name: "Emma Wilson",
        enrolled: true,
        grades: [85, 90, 88],
      },
      {
        id: 1002,
        name: "Liam Brown",
        enrolled: true,
        grades: [92, 95, 89],
      },
    ],
    topics: ["HTML", "CSS", "JavaScript", "React"],
    duration: 12,
    isActive: true,
  },
};
