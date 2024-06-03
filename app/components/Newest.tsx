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

  const style = { "--length": `${data.length}` } as React.CSSProperties;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest page
          </h2>
          <Link href="/all" className="text-primary flex items-center gap-x-1">
            See All
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="mt-6 grid relative m-auto overflow-hidden">
          <div
            style={style}
            className={`slide-track flex gap-2 lg:w-[calc(336px*${data.length} - 32px)]`}
          >
            {data.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
            {data.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
