"use client"

import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"

interface iAppProps {
    images: any
}

export default function ImageGallery({ images }: iAppProps) {
    const [bigImage, setBigImage] = useState(images[0])

    const handleSmallImageClick = (image: any) => {
        setBigImage(image);
    }
    return (
        <div className="grid gap-2 lg:grid-cols-5">
            <div className="order-last flex gap-2 lg:order-none lg:flex-col">
                {images.map((image: any, idx: any) => (
                    <div
                        key={idx}
                        className={`
                        overflow-hidden ${bigImage == image && "border-2 border-yellow-500"} 
                        w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-md bg-gray-100`}
                    >
                        <Image
                            src={urlFor(image).url()}
                            width={200}
                            height={200}
                            alt="photo"
                            className="h-full w-full object-cover object-center cursor-pointer"
                            onClick={() => handleSmallImageClick(image)}
                            priority
                        />
                    </div>
                ))}
            </div>
            <div className="relative h-[400px] w-full md:h-[450px] md:w-[360px] lg:h-[550px] lg:w-[400px] flex items-center justify-center overflow-hidden rounded-md bg-gray-100 lg:col-span-4">
                <Image
                    src={urlFor(bigImage).url()}
                    alt="thumbnail"
                    width={500}
                    height={500}
                    className="h-full w-full object-contain object-center"
                    priority
                />
                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    Sale
                </span>
            </div>

        </div>
    )
}
