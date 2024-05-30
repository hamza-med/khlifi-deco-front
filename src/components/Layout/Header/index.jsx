import useFetch from "@/hooks/useFetch";
import { Skeleton, useDisclosure, useMediaQuery } from "@chakra-ui/react";

import { Suspense, lazy, useState } from "react";

import Logo from "./Logo";

const MiniHeader = lazy(() => import("../../MiniHeader"));
const NavbarDrawer = lazy(() => import("../../NavbarDrawer"));
const ShoppingCart = lazy(() => import("./Cart/ShoppingCart"));
const Navbar = lazy(() => import("./Navbar"));
const NavIcons = lazy(() => import("./NavIcons"));
const SearchModal = lazy(() => import("./SearchModal/SearchModal"));
const ToggleMenu = lazy(() => import("./ToggleMenu"));

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [open, setOpen] = useState(false);
  const { data: categories } = useFetch(
    `/categories?fields[0]=title&populate[sub_categories][fields][0]=title`
  );
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <header>
      <MiniHeader />
      <div className="header">
        <Logo isMobile={isMobile} />
        <Suspense>
          <Navbar categories={categories} />
        </Suspense>
        <Suspense>
          <NavIcons onOpen={onOpen} />
        </Suspense>
        <Suspense>
          <NavbarDrawer
            isOpen={open}
            categories={categories}
            showDrawer={setOpen}
          />
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <ToggleMenu showDrawer={setOpen} isOpen={open} isMobile={isMobile} />
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <SearchModal isOpen={isOpen} onClose={onClose} />
        </Suspense>
        <Suspense>
          <ShoppingCart />
        </Suspense>
      </div>
    </header>
  );
};
export default Header;
