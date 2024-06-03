import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import ProductCard from "../components/ProductCard";

async function getData(category: string) {
  let query = "";
  const queryObject = `{
        _id,
        "imageUrl": images[0].asset->url,
        price,
        price_id,
        name,
        description,
        "slug": slug.current,
        "categoryName": category->name
      }`;
  if (category === "all") {
    query = `*[_type == "product"]${queryObject}`;
  } else {
    query = `*[_type == "product" && category->name =="${category}"]${queryObject}`;
  }

  const data = await client.fetch(query, {}, { cache: "force-cache" });

  return data;
}

export const dynamic = "error";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifiedProduct[] = await getData(params.category);

  return (
    <div className="bg-white">
      <div className="mx-auto mb-12 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products for {params.category}
          </h2>
        </div>
        <div
          className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 
        lg:grid-cols-4 xl:gap-x-8"
        >
          {data.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
