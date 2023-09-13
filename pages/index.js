import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";


export default function Home({ products }) {

  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragaph start */}
        <div className="text-center grid  max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Welcome to the MiniFit Store
                    </div>
                    <div className="text-md md:text-xl flex justify-between">
            "Welcome to our premium collection of Wooden Parallettes - the perfect
            fusion of craftsmanship, stability, and functionality. Crafted from high-quality,
            sustainable hardwood, our parallettes offer a superior grip and sturdy support for
            your calisthenics and gymnastic routines. Elevate your fitness regime with these
            versatile tools designed to enhance strength, balance, and core stability. Explore
            our range of hand-finished parallettes, available in various sizes to cater to
            different skill levels. Unlock new heights in your workouts with these eco-friendly,
            aesthetically pleasing wooden parallettes. Elevate your fitness journey today!"
                    </div>
          </div>
        {/* heading and paragaph end */}
        
        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
              {products?.data?.map((product) => (
                <ProductCard key={product?.id} data={product} />
              ))}
                    {/* <ProductCard />
                    <ProductCard /> */}
        </div>
        {/* products grid end */}
        
      </Wrapper>
    </main>
  )
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
      props: { products },
  };
}
