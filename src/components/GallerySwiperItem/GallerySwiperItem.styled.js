import styled from 'styled-components';

export const GalleryMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const GalleryContainer = styled.div`
  display: grid;
  box-sizing: border-box;
  max-height: 100%;
  grid-template-columns: repeat(2, 254px);
  grid-template-rows: repeat(auto-fit, 300px);
  border-radius: 8px;
`;

export const GalleryImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
