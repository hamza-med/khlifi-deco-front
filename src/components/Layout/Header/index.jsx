import useFetch from "@/hooks/useFetch";
import { Spinner, useDisclosure, useMediaQuery } from "@chakra-ui/react";

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
  const { data: categories } = useFetch(`/categories?populate=*`);
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
        <Suspense fallback={<Spinner />}>
          <ToggleMenu showDrawer={setOpen} isOpen={open} isMobile={isMobile} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
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
