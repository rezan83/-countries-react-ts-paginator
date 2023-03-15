import React, { FC } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, SimpleGrid } from '@chakra-ui/react';

import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSelectedPage } from '../../redux/country/countrySlice';
import PagerBtns from './PagerBtns';

interface IPaginatorProps {
  pages: number;
}

const Paginator: FC<IPaginatorProps> = ({ pages }) => {
  const dispatch = useAppDispatch();
  const selectedPage = useAppSelector((state: RootState) => {
    return state.countryR.selectedPage > pages - 1 ? 0 : state.countryR.selectedPage;
  });

  const chooseSelected = (num: number) => {
    dispatch(setSelectedPage(num));
  };

  const changeSelected = (num: number) => {
    const neuNum = selectedPage + num;
    if (neuNum < pages && neuNum >= 0) {
      dispatch(setSelectedPage(neuNum));
    }
  };
 const pagerBtnsStyle = {
  w: '1rem'
 }
  return (
    <SimpleGrid columns={11} m="0 auto" w="fit-content">
      <Button sx={pagerBtnsStyle} onClick={() => chooseSelected(0)}>
        <ArrowLeftIcon />
      </Button>
      <Button sx={pagerBtnsStyle} onClick={() => changeSelected(-1)}>
        <ChevronLeftIcon />
      </Button>

      <PagerBtns pages={pages} selectedPage={selectedPage} chooseSelected={chooseSelected} pagerBtnsStyle={pagerBtnsStyle} />

      <Button sx={pagerBtnsStyle} onClick={() => changeSelected(1)}>
        <ChevronRightIcon />
      </Button>
      <Button sx={pagerBtnsStyle} onClick={() => chooseSelected(pages - 1)}>
        <ArrowRightIcon />
      </Button>
    </SimpleGrid>
  );
};

export default Paginator;
