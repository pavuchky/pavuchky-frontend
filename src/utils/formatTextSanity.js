const formatTextSanity = data => {
  const newArr = data.map(el => {
    const childrenElText = el.children[0].text + '\n';
    // if (childrenElText === '') return '\n\n';

    return childrenElText;
  });

  return newArr.join("");
};

export default formatTextSanity;
