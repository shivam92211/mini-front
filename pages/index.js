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
            At MiniFit Parallettes, we are dedicated to delivering high-quality
            parallettes for a wide range of applications. With our state-of-the-art
            manufacturing facility and a team of skilled professionals, we provide reliable
            and precise solutions for your parallel motion needs.
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
