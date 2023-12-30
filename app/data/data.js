export const pageData = {
  pages: [
    {
      name: "welcome",
      number: 1,
    },
    {
      name: "stack",
      number: 2,
    },
    {
      name: "experience",
      number: 3,
    },
    {
      name: "contacts",
      number: 4,
    },
  ],
  stackData: [
    {
      id: 0,
      title: "Front End",
      name: "Front End",
      data: [
        {
          id: 0,
          name: "React JS",
          rating: 4,
        },
      ],
    },
    {
      id: 1,
      title: "Back End",
      name: "Back End",
      data: [
        {
          id: 0,
          name: "Languages",
          data: [
            {
              id: 0,
              name: "Ruby on Rails",
              rating: 4,
            },
          ],
        },
        {
          id: 1,
          name: "Database Systems",
          data: [
            {
              id: 0,
              name: "MSSQL/SQL Server",
              rating: 4,
            },
            {
              id: 1,
              name: "PostgreSQL",
              rating: 4,
            },
          ],
        },
      ],
    },
  ],
  selectedPage: 1,
};
