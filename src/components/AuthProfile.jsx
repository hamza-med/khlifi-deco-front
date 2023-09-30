import { useAuthContext } from "@/hooks/useAuthContext";
import { HStack, MenuItem, MenuList } from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AuthProfile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();

  return (
    <MenuList
      borderColor="white"
      borderRadius="none"
      fontSize="0.98rem"
      className="authProfile"
    >
      <MenuItem
        _hover={{ bgColor: "rgba(0,0,0,0.02)" }}
        _focus={{ bgColor: "rgba(0,0,0,0.02)" }}
      >
        <HStack gap="1" fontWeight="500">
          <p>Logged in as</p>
          <p style={{ fontWeight: "600" }}>{user?.username}</p>
        </HStack>
      </MenuItem>
      <MenuItem
        fontWeight="500"
        _hover={{ bgColor: "rgba(0,0,0,0.02)" }}
        _focus={{ bgColor: "rgba(0,0,0,0.02)" }}
        onClick={() => {
          localStorage.removeItem("token");
          setUser(undefined);
          navigate("/login");
        }}
      >
        <HStack justifyContent="space-between" gap="1em">
          <p>Quitter</p>
          <MdLogout fontSize="1.2rem" fontWeight="600" />
        </HStack>
      </MenuItem>
    </MenuList>
  );
};

export default AuthProfile;
