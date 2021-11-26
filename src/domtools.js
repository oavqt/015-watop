const dom = {
  get: {
    element: {
      content: () => {
        return document.querySelector('.content');
      },
      input: {
        search: () => {
          return document.querySelector('.input--search');
        }
      },
      button: {
        search: () => {
          return document.querySelector('.button--search');
        }
      }
    },
    value: {
      input: {
        search: () => {
          return document.querySelector('.input--search').value;
        }
      }
    }
  }
};

export default dom;
