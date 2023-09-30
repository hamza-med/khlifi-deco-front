import { useAuthContext } from "@/hooks/useAuthContext";
import { HStack, MenuItem, MenuList } from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AuthProfile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();

  return (
    <MenuList borderColor="rgba(0,0,0,0.1)" borderRadius="none" fontSize="1rem" className="authProfile">
      <MenuItem
        _hover={{ bgColor: "rgba(0,0,0,0.05)" }}
        _focus={{ bgColor: "rgba(0,0,0,0.06)" }}
      >
        <HStack fontWeight="500">
          <p>Logged in as</p>
          <p style={{ fontWeight: "700" }}>{user?.username}</p>
        </HStack>
      </MenuItem>
      <MenuItem
        fontWeight="500"
        _hover={{ bgColor: "rgba(0,0,0,0.06)" }}
        _focus={{ bgColor: "rgba(0,0,0,0.06)" }}
        onClick={() => {
          localStorage.removeItem("token");
          setUser(undefined);
          navigate("/login");
        }}
      >
        <HStack justifyContent="space-between" gap="1em">
          <p>Logout</p>
          <MdLogout fontSize="1.3rem" />
        </HStack>
      </MenuItem>
    </MenuList>
  );
};

export default AuthProfile;
