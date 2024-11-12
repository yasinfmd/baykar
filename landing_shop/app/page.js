import PopularProduct from "@/app/components/PopularProduct/PopularProduct";
import './page.css'
import BestOfBest from "@/app/components/BestOfBest";
import Join from "@/app/components/Join";
import Comments from "@/app/components/Comments";
import Collection from "@/app/components/Collection";
import Map from "@/app/components/Map";
export default function Home() {
  return (
      <>
          <PopularProduct />
          <BestOfBest />
          <Join />
          <Comments />
          <Collection />
          <Map />


      </>
  );
}
