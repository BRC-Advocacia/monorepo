import FetchArticles from "./components/FetchArticles";
import Guide from "./components/Guide";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
        <div className="container mx-auto">
            <Header />
            <div className="mt-24">
                <Guide />
                <FetchArticles />
            </div>
        </div>
    </>
  );
}
