import Input from "@/uilib/Input";

const Login = () => {
  return <div className="login__wrapper">
    <h1>Connectez-vous à votre compte</h1>
    <Input
        required
        label="Email"
        name="email"
        placeholder="email"
        // control={control}
      />
    <Input
        required
        label="Password"
        name="password"
        placeholder="password"
        // control={control}
      />
  </div>;
};

export default Login;
