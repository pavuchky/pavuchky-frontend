const formatFileSanity = file => {
  const ref = file.asset._ref;

  const assetRefParts = ref.split('-');
  const id = assetRefParts[1];
  const format = assetRefParts[2];
  const assetUrl = `https://cdn.sanity.io/files/b1wab9pv/production/${id}.${format}`;

  console.log("assetUrl", assetUrl)

  return assetUrl;
};

export default formatFileSanity;
