import { Button, HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AccountWrapper = ({
  children,
  loading,
  type = "login",
  title,
  handleSubmit,
  isDirty,
  errors,
  onSubmit,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { btn, noAcc, createAcc, register, haveAcc, connect } = t("login");
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
              {btn}
            </Button>
            <HStack fontSize="0.9rem" align="end">
              <p>{noAcc} </p>
              <span
                style={{
                  fontWeight: "600",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/register")}
              >
                {createAcc}
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
              {register}
            </Button>
            <HStack fontSize="0.9rem" align="end">
              <p>{haveAcc} </p>
              <span
                style={{ fontWeight: "600", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                {connect}
              </span>
            </HStack>
          </div>
        )}
      </form>
    </div>
  );
};
export default AccountWrapper;
