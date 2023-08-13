import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

import useFetch from 'hooks/useFetch';
import ReviewSwiperItem from 'components/ReviewSwiperItem/ReviewSwiperItem';
import {
  PaginationContainer,
  ReviewsPaginationList,
} from './ReviewsPagination.styled';

import SvgIcon from '@mui/material/SvgIcon';

import PaginationItem from '@mui/material/PaginationItem';

const ReviewsPagination = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const isTabletScreen = useMediaQuery({ minWidth: 768 });
  const isDesktopScreen = useMediaQuery({ minWidth: 1440 });

  const { data } = useFetch('reviews');

  //////////////////////////
  useEffect(() => {
    for (let i = 1; i < 126; i++) {
      data?.reviewList.push({
        id: i,
        reviewImage: null,
        reviewDesc: 'Щиро дякуємо за маскування.  Наші бійці в повній безпеці',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.reviewList]);
  //////////////////////////

  useEffect(() => {
    const mobileAndDesktopCeil = Math.ceil(data?.reviewList.length / 3) || 1;
    const tabletCeil = Math.ceil(data?.reviewList.length / 6) || 1;

    const isTablet = isTabletScreen && !isDesktopScreen;

    isTablet ? setCount(tabletCeil) : setCount(mobileAndDesktopCeil);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktopScreen, isTabletScreen]);

  const handleChange = (_, selectedPage) => {
    setPage(selectedPage);
  };

  const renderedData = () => {
    const isTablet = isTabletScreen && !isDesktopScreen;

    const currentSlidePerPage = isTablet ? 6 : 3;

    return data?.reviewList.slice(
      page * currentSlidePerPage - currentSlidePerPage,
      page * currentSlidePerPage
    );
  };

  return (
    <>
      <ReviewsPaginationList>
        {renderedData()?.map(({ id, reviewDesc, reviewImage }) => (
          <li key={id}>
            <ReviewSwiperItem review={reviewDesc} reviewImage={reviewImage} />
          </li>
        ))}
      </ReviewsPaginationList>
      <PaginationContainer
        onChange={handleChange}
        count={count}
        boundaryCount={isTabletScreen ? 1 : 1}
        siblingCount={isTabletScreen ? 0 : -1}
        renderItem={item => (
          <PaginationItem
            slots={{
              previous: SvgIcon,
              next: SvgIcon,
            }}
            {...item}
          />
        )}
      />
    </>
  );
};

export default ReviewsPagination;
