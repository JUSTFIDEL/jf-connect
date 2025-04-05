'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

export const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Button
      className='sm:hidden items-center justify-between gap-4'
      variant='ghost'
      onClick={toggle}
    >
      <Menu />
      {/* {isOpen ? <Menu /> : ''} */}
    </Button>
  );
};
