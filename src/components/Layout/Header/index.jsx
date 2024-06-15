import useFetch from "@/hooks/useFetch";
import { Skeleton, useDisclosure, useMediaQuery } from "@chakra-ui/react";

import { Suspense, lazy, useState } from "react";

import Logo from "./Logo";
import { useTranslation } from "react-i18next";

const MiniHeader = lazy(() => import("../../MiniHeader"));
const NavbarDrawer = lazy(() => import("../../NavbarDrawer"));
const ShoppingCart = lazy(() => import("./Cart/ShoppingCart"));
const Navbar = lazy(() => import("./Navbar"));
const NavIcons = lazy(() => import("./NavIcons"));
const SearchModal = lazy(() => import("./SearchModal/SearchModal"));
const ToggleMenu = lazy(() => import("./ToggleMenu"));

const Header = () => {
  const { t } = useTranslation();
  const navList = [
    { id: 1, title: t("shop.home"), to: "/", isMenu: false },
    { id: 2, title: t("shop.type"), to: "shop", isMenu: true },
    { id: 3, title: "Contact", to: "contact", isMenu: false },
    { id: 4, title: t("cart.type"), to: "cart", isMenu: false },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [open, setOpen] = useState(false);
  const {
    i18n: { language },
  } = useTranslation();
  const { data: categories } = useFetch(
    `/categories?locale=${language}&fields[0]=title&populate[sub_categories][fields][0]=title`
  );
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <header>
      <MiniHeader />
      <div className="header">
        <Logo isMobile={isMobile} />
        <Suspense>
          <Navbar navList={navList} categories={categories} />
        </Suspense>
        <Suspense>
          <NavIcons onOpen={onOpen} />
        </Suspense>
        <Suspense>
          <NavbarDrawer
            navList={navList}
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
