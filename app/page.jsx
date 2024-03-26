import Feed from "../components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum vitae
        quia ea veritatis animi sapiente repudiandae quas, ex dignissimos fugit
        unde ratione mollitia voluptate? Aspernatur tempore voluptates
        architecto asperiores expedita eos, libero, maiores omnis obcaecati id
        voluptate porro fugiat quo ipsa! Unde ipsa harum dolorum deleniti
        pariatur totam aperiam nostrum!
      </p>
      <Feed />
    </section>
  );
};

export default Home;
