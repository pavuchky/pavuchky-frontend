import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'b1wab9pv',
  dataset: 'production',
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2023-03-07',
  token:
    'skHm9E3I5GFwmolUawVkTIRESMfsMxCcmBMHfXP9lDfV84l7SnPmhugMaQRzdl30fwjEz7DMWovkSCLnYUvZGnaL1740utuuNzfp3qp5ASTVUsPjoEFAuwMxCfAYj0yj4UAH8fPZ3ooP7Oj8izgk190ibfHEVzT4BE6KxBS2Utpw9BY0a4IX',
});

const builder = imageUrlBuilder(client);

export const urlFor = source => builder.image(source);
