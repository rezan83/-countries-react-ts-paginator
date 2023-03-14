import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';

interface IPagerBtnsProps {
  pages: number;
  selectedPage: number;
  chooseSelected: (num: number) => void;
}
const PagerBtns: FC<IPagerBtnsProps> = ({ pages, selectedPage, chooseSelected }) => {
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

  return <>{pagerBtns}</>;
};

export default PagerBtns;
