import { Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AccountWrapper = ({
  children,
  loading,
  type = "login",
  title,
  handleSubmit,
  isDirty,
  errors,
  onSubmit
}) => {
  const navigate = useNavigate();
  return (
    <div className="login__wrapper">
      <h1 className="login__title">{title}</h1>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        {children}
        {type === "login" ? (
          <div className="login__footer">
            <Button
              type="submit"
              isDisabled={!isDirty || Object.entries(errors).length !== 0}
              isLoading={loading}
              bgColor="rgba(79, 64, 43)"
              _hover={{
                bgColor: "rgba(79, 64, 43,0.8)",
              }}
              color="white"
            >
              Connecter{" "}
            </Button>
            <HStack fontSize="0.9rem" align="end">
              <p>Pas de compte? </p>
              <span
                style={{
                  fontWeight: "600",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/register")}
              >
                Créez-en un
              </span>
            </HStack>
          </div>
        ) : (
          <div className="login__footer">
            <Button
              type="submit"
              isDisabled={!isDirty || Object.entries(errors).length !== 0}
              isLoading={false}
              bgColor="rgba(79, 64, 43)"
              _hover={{
                bgColor: "rgba(79, 64, 43,0.8)",
              }}
              color="white"
            >
              Enregistrer{" "}
            </Button>
            <HStack fontSize="0.9rem" align="end">
              <p>Vous avez un compte ? </p>
              <span
                style={{ fontWeight: "600", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Connectez-vous !
              </span>
            </HStack>
          </div>
        )}
      </form>
    </div>
  );
};
export default AccountWrapper;
