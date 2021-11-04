import React from 'react'

export default function BannerAbout() {
    return (
        <div className="flex flex-col">
            <div className="relative flex my-30">
                <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                />
                <div className="absolute bg-base text-start">
                    <h1 className="text-white">
                        О БРЕНДЕ
                    </h1>
                    <p className="text-white">M.MANZONI - это немецкий бренд мужской одежды, производящий изделия на территории Италии, Румынии, Турции и Португалии.</p>
                    <a className="text-white underline"href="/">Подробнее</a>
                </div>
            </div>
            <div className="flex ">
                <div>
                    <h2>СКИДКИ ДО 20-30 %</h2>
                    <p>НА ВЕСЬ АССОРТИМЕНТ</p>
                    <a className="text-base underline"href="/">В каталог</a>
                </div>
                <div className="flex">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
