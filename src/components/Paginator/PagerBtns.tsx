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
    const toDisplau = !(
      (index < selectedPage + 3 && index > selectedPage - 3) ||
      index === 0 ||
      index === pages - 1
    )
      ? 'none'
      : 'inline-block';
    pagerBtns.push(
      <Button
        display={toDisplau}
        size={'xs'}
        bg={selectedPage === index ? 'blue.400' : ''}
        onClick={() => chooseSelected(index + 1)}
        variant={'link'}
        key={index}>
        {`${index === pages - 1 ? '...' : ''} ${index + 1} ${index === 0 ? '...' : ''}`}
      </Button>
    );
  }

  return <>{pagerBtns}</>;
};

export default PagerBtns;
