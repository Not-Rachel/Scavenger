import { useState } from "react";
import FadeContent from "../components/FadeContent";
// import FuzzyText from "../components/FuzzyText";
import TopNav from "../components/ScavNav";
import { useAuth } from "../AuthContext";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import api from "../api";
function Login() {
  const navigate = useNavigate();

  const auth = useAuth();

  if (auth === null || auth.isAuthorized === null) {
    return <div>Loading...</div>;
  }

  const { setIsAuthorized, setUser } = auth;

  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    // console.log("Username, password", username, password, route, method);
    setLoading(true);
    try {
      // if (method === "register" && formData.password != confirmedPassword) {
      //   throw new Error("Passwords do not match");
      // }
      console.log("send");
      const response = await api.post("/api/token/", formData);
      console.log("response");
      if (response.status == 200 && isLogin) {
        await localStorage.setItem(ACCESS_TOKEN, response.data.access);
        await localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        const decoded: any = jwtDecode(response.data.access);
        setUser(decoded.user_id);
        setIsAuthorized(true);
        // router.replace('/(app)/profile');
        navigate("/scavenger/profile");
      } else navigate("/scavenger/login");
    } catch (error) {
      if (error instanceof Error && "status" in error)
        setError((error as any).message);
      console.log(error);
      // setConfirmedPassword("");
      // setPassword("");
    } finally {
      setLoading(false);
    }
  }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);

  //   // Add your submission logic here (e.g., API call)
  // };

  return (
    <>
      <TopNav></TopNav>
      <FadeContent
        blur={true}
        duration={300}
        easing="ease-out"
        initialOpacity={0}
      >
        <section className="flex h-[100vh] bg-[url('assets/deer.jpg')] bg-cover [box-shadow:inset_0_0_1000px_rgba(0,0,0,0.7)]">
          <div className="font=[revolution] w-screen flex flex-col justify-center items-center ">
            <form
              onSubmit={handleSubmit}
              className=" flex flex-col justify-center items-center gap-4"
            >
              <input
                className="border-white border-2 p-2"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="USERNAME / EMAIL"
              />

              <input
                className="border-white border-2 p-2"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="PASSWORD"
              />
              {isLogin && (
                <input
                  className="border-white border-2 p-2"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="PASSWORD"
                />
              )}
              <input
                type="submit"
                value="Submit"
                className=" p-1 w-full bg-gray-400/70 rounded-sm"
              />
            </form>
            <button
              name="register"
              type="button"
              className="text-white border-2 broder-blue my-8 p-2 rounded-sm font-bold"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Created Account" : "Login"}
            </button>
          </div>
        </section>
      </FadeContent>
    </>
  );
}

export default Login;
