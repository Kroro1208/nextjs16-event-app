import Hello from "./components/Hello";

const Home = () => {
  console.log("SSR");
  return (
    <main>
      <div className="text-5xl underline">
        ようこそNextjs16の世界へ
        <Hello />
      </div>
    </main>
  );
};

export default Home;
