import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import React from "react";

async function getData() {
  const query = `*[_type == 'product'][0...5] | order(_createdAt desc){
        _id,
          price,
          price_id,
          name,
          description,
          "slug": slug.current,
        "categoryName": category->name,
          "imageUrl": images[1].asset->url
      }`;

  const data = await client.fetch(
    query,
    {},
    {
      cache: "no-store",
    }
  );

  return data;
}

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();

  const style = {
    "--length": `${data.length}`,
  } as React.CSSProperties;

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Latest Products
          </h2>
          <Link
            href="/all"
            className="text-primary text-sm md:text-base flex items-center gap-x-1"
          >
            See All
            <span>
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
        <div className="mt-6 grid relative m-auto overflow-hidden">
          <div style={style} className={`slide-track flex gap-2`}>
            {data.map((product) => (
              <ProductCard
                product={product}
                dimension={"w-48 h-48 md:w-72 md:h-72"}
                key={product._id}
              />
            ))}
            {data.map((product) => (
              <ProductCard
                product={product}
                dimension={"w-48 h-48 md:w-72 md:h-72"}
                key={product._id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
