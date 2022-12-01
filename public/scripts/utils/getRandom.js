function getRandom(n) {
  return Math.floor(Math.random() * n);
}

const getRandomMinMax = (min = 0, max = 100) => getRandom(max - min) + min;
