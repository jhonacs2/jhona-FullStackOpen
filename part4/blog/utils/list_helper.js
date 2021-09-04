const dummy = (blogs) => {
  return 1;
};

const totalLikes = (likes) => {
  return likes.length === 1
    ? likes[0].likes
    : likes.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.likes;
      }, 0);
};

const favoriteBlog = (Tlikes) => {
  const { title, author, url, likes } = Tlikes.reduce(
    (accumulator, currentValue) => {
      return accumulator.likes > currentValue.likes
        ? accumulator
        : currentValue;
    },
    0
  );
  return { title, author, likes };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
