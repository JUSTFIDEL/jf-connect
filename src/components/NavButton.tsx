import { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

type Props = {
  icon: LucideIcon;
  label: string;
  href: string;
};

const NavButton = ({ icon: Icon, label, href }: Props) => {
  return (
    <Button size='lg' variant='trans' aria-label={label} title={label} asChild>
      <Link href={href}>
        <Icon /> {label}
      </Link>
    </Button>
  );
};

export default NavButton;
