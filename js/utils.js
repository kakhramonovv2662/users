function findElement(selector, element = document) {
  return element.querySelector(selector);
}

const obj = {
  az: (a, b) => {
    if (a.name > b.name) {
      return 1;
    }

    if (b.name > a.name) {
      return -1;
    }

    return 0;
  },

  za: (a, b) => {
    if (a.name > b.name) {
      return -1;
    }

    if (b.name > a.name) {
      return 1;
    }

    return 0;
  },

  "new-old": (a, b) => {
    return b.time - a.time;
  },
  "old-new": (a, b) => {
    return a.time - b.time;
  },
};
