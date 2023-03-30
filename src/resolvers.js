const articles = [
    {
      id: '1',
      title: 'First article',
      content: 'Lorem ipsum dolor sit amet',
      author: {
        fullname: 'John Doe',
        email: 'john.doe@example.com',
        dob: '1990-01-01',
      },
      comments: [
        { title: 'Great article', content: 'Thanks for sharing!' },
        { title: 'Interesting read', content: 'I learned a lot from this article.' },
      ],
    },
    // add more articles
  ];
  
  const resolvers = {
    Query: {
      articles: () => articles,
      article: (_, { id }) => articles.find((a) => a.id === id),
    },
    Mutation: {
      createArticle: (_, { title, content }) => {
        const id = String(articles.length + 1);
        const article = { id, title, content, author: {}, comments: [] };
        articles.push(article);
        return article;
      },
    },
    Article: {
      author: (parent) => parent.author,
      comments: (parent) => parent.comments,
    },
  };
  
  module.exports = resolvers;
  