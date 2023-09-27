import { useAuthContext } from "@/hooks/useAuthContext";
import { MenuItem, MenuList } from "@chakra-ui/react";

const AuthProfile = () => {
  const { user } = useAuthContext();
  console.log("user is", user);
  return (
    <MenuList>
      <MenuItem>Download</MenuItem>
      <MenuItem>Log out</MenuItem>
    </MenuList>
  );
};

export default AuthProfile;
