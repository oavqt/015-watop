const temperature = {
  convert: {
    celsius: (value) => {
      const int = Number(value);

      if (typeof value === 'object' || Number.isNaN(int))
        throw new Error('Value is not a number');
      else return int * (9 / 5) + 32;
    },
    fahrenheit: (value) => {
      const int = Number(value);

      if (typeof value === 'object' || Number.isNaN(int))
        throw new Error('Value is not a number');
      else return (int - 32) * (5 / 9);
    }
  }
};
