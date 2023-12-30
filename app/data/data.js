export const pageData = {
  pages: [
    {
      name: "welcome",
      number: 1,
      ref: null,
    },
    {
      name: "stack",
      number: 2,
      ref: null,
    },
    {
      name: "experience",
      number: 3,
      ref: null,
    },
    {
      name: "contacts",
      number: 4,
      ref: null,
    },
  ],
  welcomeData: {
    details: {
      name: "Sef Mangampo",
    },
    words: {
      cta: "Please send me an email",
      welcome: `Hello I'm sef, a web developer`,
      heading: "Hi random stranger",
    },
  },
  expData: {
    header: "6 years of full stack web development",
  },
  contactData: {
    linkedIn: "somelinked in link",
    email: "sefmangampo@gmail.com",
  },
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
  userClicked: false,
};
