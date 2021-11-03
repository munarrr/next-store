
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
    categories: [
        {
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
                    imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
                },
                {
                    name: 'Carry',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
                    imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
                },
            ],
        },
        {
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
                    imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
                    imageAlt: 'Model wearing light heather gray t-shirt.',
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
                    imageAlt:
                        'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
                },
                {
                    name: 'Carry',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
                    imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
                },
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}
const collections = [
    {
        name: "Women's",
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg',
        imageAlt: 'Woman wearing a comfortable cotton t-shirt.',
    },
    {
        name: "Men's",
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg',
        imageAlt: 'Man wearing a comfortable and casual cotton t-shirt.',
    },
    {
        name: 'Desk Accessories',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg',
        imageAlt: 'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
    },
]
const trendingProducts = [
    {
        id: 1,
        name: 'Leather Long Wallet',
        color: 'Natural',
        price: '$75',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
        imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    // More products...
]
const perks = [
    {
        name: 'Free returns',
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
        description: 'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
    },
    {
        name: 'Same day delivery',
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
        description:
            'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
    },
    {
        name: 'All year discount',
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
        description: 'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
    },
    {
        name: 'For the planet',
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
        description: 'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
    },
]
const footerNavigation = {
    products: [
        { name: 'Bags', href: '#' },
        { name: 'Tees', href: '#' },
        { name: 'Objects', href: '#' },
        { name: 'Home Goods', href: '#' },
        { name: 'Accessories', href: '#' },
    ],
    company: [
        { name: 'Who we are', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy', href: '#' },
    ],
    customerService: [
        { name: 'Contact', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Warranty', href: '#' },
        { name: 'Secure Payments', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Find a store', href: '#' },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">
           

           
            <main>
                {/* Hero section */}
                <div className="relative">
                    {/* Background image and overlap */}
                    <div aria-hidden="true" className="hidden absolute inset-0 sm:flex sm:flex-col">
                        <div className="flex-1 relative w-full bg-gray-800">
                            <div className="absolute inset-0 overflow-hidden">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                                    alt=""
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                           
                        </div>
                       
                    </div>

                    <div className="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
                        {/* Background image and overlap */}
                        <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
                            <div className="flex-1 relative w-full bg-gray-800">
                                <div className="absolute inset-0 overflow-hidden">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                                        alt=""
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gray-900 opacity-50" />
                            </div>
                            <div className="w-full bg-white h-48" />
                        </div>
                        <div className="relative py-32">
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                  
                </div>

            
            </main>

           
        </div>
    )
}
