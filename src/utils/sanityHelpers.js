export const formatFileSanity = file => {
  const ref = file.asset._ref;

  const assetRefParts = ref.split('-');
  const id = assetRefParts[1];
  const format = assetRefParts[2];
  const assetUrl = `https://cdn.sanity.io/files/b1wab9pv/production/${id}.${format}`;

  console.log('assetUrl', assetUrl);

  return assetUrl;
};

export const formatTextSanity = data => {
  const newArr = data.map(el => {
    const childrenElText = el.children[0].text + '\n';
    // if (childrenElText === '') return '\n\n';

    return childrenElText;
  });

  return newArr.join('');
};

const BASE_MEDIA_URL = 'https://drive.google.com/uc?export=view&id=';
export const formatMediaLinkSanity = link => {
  const mediaId = link.substring(link.indexOf('d/')).split('/')[1];

  return BASE_MEDIA_URL + mediaId;
};
