import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';

interface IPagerBtnsProps {
  pages: number;
  selectedPage: number;
  chooseSelected: (num: number) => void;
  pagerBtnsStyle: any;
}
const PagerBtns: FC<IPagerBtnsProps> = ({
  pages,
  selectedPage,
  chooseSelected,
  pagerBtnsStyle
}) => {
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
      selectedPage < pages - 2 &&
      pagerBtns.push(
        <Button sx={pagerBtnsStyle} size={'sm'} variant={'link'} key={pages + index}>
          {'...'}
        </Button>
      );
    pagerBtns.push(
      <Button
        sx={pagerBtnsStyle}
        display={toDisplau}
        size={'sm'}
        bg={selectedPage === index ? 'blue.400' : ''}
        onClick={() => chooseSelected(index)}
        variant={'link'}
        key={index}>
        {index + 1}
      </Button>
    );
    index === 0 &&
      selectedPage > 1 &&
      pagerBtns.push(
        <Button sx={pagerBtnsStyle} size={'sm'} variant={'link'} key={pages + index}>
          {'...'}
        </Button>
      );
  }

  return <>{pagerBtns}</>;
};

export default PagerBtns;
