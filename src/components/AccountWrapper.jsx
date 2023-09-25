import { Button, HStack } from "@chakra-ui/react";

const AccountWrapper = ({
  children,
  type = "login",
  title,
  handleSubmit,
  isDirty,
  errors,
}) => {
  const onSubmit = (data) => console.log(data);
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
              isLoading={false}
              bgColor="rgba(79, 64, 43)"
              _hover={{
                bgColor: "rgba(79, 64, 43,0.8)",
              }}
              color="white"
            >
              Connecter{" "}
            </Button>
            <HStack>
              <p>Pas de compte? </p>
              <span>Créez-en un</span>
            </HStack>
          </div>
        ) : (
          <div className="login__footer">
            <Button
              type="submit"
              isDisabled={!isDirty || Object.entries(errors).length !== 0}
              isLoading={false}
            >
              Enregistrer{" "}
            </Button>
            <HStack>
              <p>Vous avez déjà un compte ? </p>
              <span>Connectez-vous !</span>
            </HStack>
          </div>
        )}
      </form>
    </div>
  );
};
export default AccountWrapper;
