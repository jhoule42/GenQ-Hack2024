import { Icons } from '@/components/icons';

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

interface StockData {
  id: string;
  name: string;
  allocation: number;
  esg_index: {
    animalTesting: boolean;
    coal: boolean;
    furLeather: boolean;
    gmo: boolean;
    palmOil: boolean;
    nuclear: boolean;
    pesticides: boolean;
  },
  esg_score: number,
}

export interface OptimizedPortfolioData {
  stock_data: StockData[];
  //stock_allocation: Stock Allocation
}