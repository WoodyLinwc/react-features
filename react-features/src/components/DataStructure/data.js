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
  {
    id: 4,
    name: "Johny Chris",
    age: 28,
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
  "java",
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

export const arrayOfObjectsCode = `export const arrayOfObjects = [
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
  {
    id: 4,
    name: "Johny Chris",
    age: 28,
    city: "Chicago",
  },
];

// Modify original: sort()
// Return new array: toSorted(), filter(), map(), reduce()
// Return new reference: find()

// Sort arrayOfObjects by age in ascending order without modify original array
// [... arrayOfObject.sort()] also works
const sortByAge = arrayOfObjects.toSorted((a, b) => a.age - b.age);

// Sort arrayOfObjects by city name alphabetically
arrayOfObjects.sort((a, b) => a.city.localeCompare(b.city));

// Filter arrayOfObjects to get only people older than 25
const filteredPeople = arrayOfObjects.filter((obj) => obj.age > 25);

// Find the person with id 2
const findWithID = arrayOfObjects.find((obj) => obj.id === 2);

// Get an array of just the names from arrayOfObjects
const arrayOfNames = arrayOfObjects.map((obj) => obj.name);

// Calculate the average age of all people
const averageAge = arrayOfObjects.reduce((acc, obj) => acc + obj.age, 0) / arrayOfObjects.length;

// Group people by city (return an object with city as key)
// {city: [], city: []}
const groupByCity = arrayOfObjects.reduce((acc, obj) => {
  if (!acc[obj.city]) {
    acc[obj.city] = [];
  }
  acc[obj.city].push(obj.name);

  return acc;
}, {});

// Count how many people are from each city
const peopleInEachCity = people.reduce((acc, obj) => {
  if (!acc[obj.city]) {
    acc[obj.city] = 0;
  }
  acc[obj.city]++;
  return acc;
}, {});

// Add a new person to the array
const newPerson = {
  id: 5,
  name: "Daniel Wu",
  age: 45,
  city: "Boston",
};

arrayOfObjects.push(newPerson);
// in React
const [people, setPeople] = useState(arrayOfObjects);
// update immutabily
useEffect(() => {
  setPeople((prev) => [...prev, newPerson]);
}, []);

// Update Bob Smith's age to 35
useEffect(() => {
  // setter function with prev and callback
  setPeople((prev) =>
    prev.map((obj) => {
      // ternary operator, map() requires return for every elements
      return obj.name === "Bob Smith" ? { ...obj, age: 35 } : obj;
    })
  );
}, []);

// Remove the person with id 3
useEffect(() => {
  setPeople((prev) => {
    // {} requires explict return
    return prev.filter((obj) => obj.id !== 3);
  });
}, []);

// Check if anyone is from "Chicago"
// some() accepts a callback, includes() check specific value for primitive
people.some((obj) => obj.city === "Chicago")

// Find the oldest person
// no need for initial value, find min or max
const oldestPerson = people.reduce((prev, cur) =>
  cur.age > prev.age ? cur : prev
);

// Find the oldest person name
const oldestPersonName = people.reduce((prev, cur) =>
  prev.age < cur.age ? cur : prev
).name;

// Get all unique cities as an array
const uniqueCity = [...new Set(people.map((obj) => obj.city))];
`;

export const arrayOfStringsCode = `export const arrayOfStrings = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "Go",
  "java",
]

// Sort arrayOfStrings alphabetically
languages.sort((a, b) => a.localeCompare(b));

`;
