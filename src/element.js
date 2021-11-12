const element = {
  create: (tag, attributes, ...children) => {
    const elementTemp = document.createElement(tag);

    Object.entries(attributes).forEach((attr) => {
      elementTemp.setAttribute(attr[0], attr[1]);
    });

    children.forEach((child) => {
      if (typeof child === 'string')
        elementTemp.appendChild(document.createTextNode(child));
      else elementTemp.appendChild(child);
    });

    return elementTemp;
  }
};

export default element;
