const NavButton = ({ children, drawerOpened = false }) => {
  return (
    <button className={drawerOpened ? `header-button-drawer` : `header-button`}>
      {children}
    </button>
  );
};

export default NavButton;
