import React, { FC, useEffect, useMemo } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, SimpleGrid } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setSelectedPage } from '../redux/country/countrySlice';

interface IPaginatorProps {
  pages: number;
}
const Paginator: FC<IPaginatorProps> = ({ pages }) => {
  const dispatch = useAppDispatch();
  const selectedPage = useAppSelector(state => state.countryR.selectedPage);

  const pagerBtns = useMemo(() => {
    let pagerBtns: JSX.Element[] = [];
    for (let index = 0; index < pages; index++) {
      if (index < selectedPage + 4 && index > selectedPage - 4) {
        pagerBtns.push(
          <Button
            size={'xs'}
            bg={selectedPage === index ? 'blue.400' : ''}
            onClick={() => chooseSelected(index + 1)}
            variant={'link'}
            key={index}>
            {index + 1}
          </Button>
        );
      }
    }
    return pagerBtns;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages, selectedPage]);

  useEffect(() => {}, [pagerBtns]);

  const chooseSelected = (num: number) => {
    dispatch(setSelectedPage(num));
  };

  const changeSelected = (num: number) => {
    const neuNum = selectedPage + num + 1;
    if (neuNum < pages && neuNum >= 1) {
      dispatch(setSelectedPage(neuNum));
    }
  };
  return (
    <SimpleGrid columns={11} m="0 auto">
      <Button onClick={() => chooseSelected(1)}>
        <ArrowLeftIcon />
      </Button>
      <Button onClick={() => changeSelected(-1)}>
        <ChevronLeftIcon />
      </Button>

      {pagerBtns}

      <Button onClick={() => changeSelected(1)}>
        <ChevronRightIcon />
      </Button>
      <Button onClick={() => chooseSelected(pages)}>
        <ArrowRightIcon />
      </Button>
    </SimpleGrid>
  );
};

export default Paginator;
