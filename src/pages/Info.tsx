import { useState } from "react";
import FadeContent from "../components/FadeContent";
// import FuzzyText from "../components/FuzzyText";
import TopNav from "../components/ScavNav";

function Info() {
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here (e.g., API call)
  };

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
          <div className="font=[revolution] w-screen flex flex-col justify-center items-center text-white">
            <form
              onSubmit={handleSubmit}
              className=" flex flex-col justify-center items-center gap-16"
            >
              <input
                className="border-white border-2"
                type="text"
                name="user"
                value={formData.user}
                onChange={handleChange}
                placeholder="USERNAME"
              />
              <input
                className="border-white border-2"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL"
              />

              <input
                className="border-white border-2"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="PASSWORD"
              />
              <input
                type="submit"
                value="Submit"
                className="border-2 border-white"
              />
            </form>
          </div>
        </section>
      </FadeContent>
    </>
  );
}

export default Info;
