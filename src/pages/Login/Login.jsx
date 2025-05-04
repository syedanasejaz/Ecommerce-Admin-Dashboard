import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import loginimage from "../../assets/images/login-side-image.png";
import logo from "../../assets/logo/logo.png";
import Button from "../../components/Button/Button"; // Assuming your button component is working as expected
import InputField from "../../components/Input/Input";

// Predefined mock users
const mockUsers = [
  { email: "admin@ecommerce.com", password: "password", role: "admin" },
  { email: "user@ecommerce.com", password: "userpass", role: "user" },
  { email: "manager@ecommerce.com", password: "managerpass", role: "manager" },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Redirect to dashboard if already logged in
    if (localStorage.getItem("jwt_token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });

    // Check if the email and password match any mock user
    const user = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      const mockToken = "mock_jwt_token"; // Fake token
      localStorage.setItem("jwt_token", mockToken);
      localStorage.setItem("user_role", user.role); // Store user role (optional)

      navigate("/dashboard"); // Use navigate for redirection
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex h-[100vh] w-full overflow-hidden bg-white dark:bg-gray-900">
      {/* Left side */}
      <div className="flex w-full items-center justify-center lg:w-1/2 overflow-y-auto">
        <div className="w-full max-w-md space-y-6 px-8 py-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-coral-500">
              <img src={logo} alt="logo" className="w-56 h-56" />
            </h2>
          </div>

          <div>
            <p className="text-gray-500 dark:text-gray-400">Welcome back !!!</p>
            <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
              Sign in
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <InputField
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="test1@gmail.com"
                label="Email"
                required
              />
              <InputField
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                label="Password"
                required
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div className="flex gap-4">
              {/* Ensure the button type is submit */}
              <Button type="submit" size="md">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:block lg:w-1/2 bg-secondary dark:bg-gray-800">
        <div className="flex h-full items-center justify-center">
          <img
            src={loginimage}
            alt="Login illustration"
            className="h-auto max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
