
import Heropage from "./heropage";
import NurturaHero from "./heropage";
import ProductSection from "./product";
import Reviewpage from "./reviewpage";
import Textcontent from "./textpage";

export default function Home() {
  return (
    <div>
      <Heropage/>
      <Textcontent/>
      <ProductSection/>
      <Reviewpage/>

    </div>
  );
}
