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
      (index < selectedPage + 2 && index > selectedPage - 2) ||
      index === 0 ||
      index === pages - 1
    )
      ? 'none'
      : 'inline-block';
    index === pages - 1 &&
      pagerBtns.push(
        <Button size={'xs'} onClick={() => chooseSelected(index)} variant={'link'} key={pages+index}>
          {'...'}
        </Button>
      );
    pagerBtns.push(
      <Button
        display={toDisplau}
        size={'xs'}
        bg={selectedPage === index ? 'blue.400' : ''}
        onClick={() => chooseSelected(index)}
        variant={'link'}
        key={index}>
        {index + 1}
      </Button>
    );
    index === 0 &&
      pagerBtns.push(
        <Button size={'xs'} onClick={() => chooseSelected(index)} variant={'link'} key={pages+index}>
          {'...'}
        </Button>
      );
  }

  return <>{pagerBtns}</>;
};

export default PagerBtns;
