<template>
  <section>
    <div class="relative bg-white">
      <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div
          class="px-6 pb-12 pt-8 sm:pb-16 lg:col-span-7 lg:px-0 lg:pb-24 lg:pt-16 xl:col-span-6"
        >
          <div class="mx-auto max-w-2xl lg:mx-0">
            <div class="hidden sm:mt-16 sm:flex lg:mt-8">
              <div
                class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Discover the best dining experiences in town.
                <a href="#main" class="whitespace-nowrap font-semibold text-red-600"
                  ><span class="absolute inset-0" aria-hidden="true" />Find out more
                  <span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div>
            <h1
              class="mt-12 text-3xl font-bold tracking-tight text-gray-900 sm:mt-8 sm:text-4xl"
            >
              Book Your Table at Top Restaurants
            </h1>
            <p class="mt-4 text-lg leading-8 text-gray-600">
              Browse and reserve tables at the best restaurants around. Enjoy exclusive
              deals and seamless booking for an unforgettable dining experience.
            </p>
            <div class="mt-8 flex items-center gap-x-4">
              <div class="flex flex-1">
                <input
                  type="text"
                  placeholder="Search for restaurants, cuisines, or locations..."
                  class="w-full rounded-md border border-gray-300 px-4 py-2 text-lg placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"
        >
          <img
            class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://placehold.co/350x400/red/fff?text=Banner"
            alt="Restaurant interior"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- Trending products -->
  <section id="main" aria-labelledby="trending-heading" class="bg-white">
    <div class="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-8">
      <div class="flex items-center justify-between px-4 sm:px-6 lg:px-0">
        <h2 id="trending-heading" class="text-2xl font-bold tracking-tight text-gray-900">
          Check 'em out
        </h2>
        <a
          href="#"
          class="hidden text-sm font-semibold text-red-600 hover:text-red-500 sm:block"
        >
          See everything
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div class="relative mt-8">
        <div class="relative w-full overflow-x-auto">
          <ul
            role="list"
            class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
          >
            <li
              v-for="restaurant in featuredRestaurants"
              :key="restaurant.id"
              class="inline-flex w-64 flex-col text-center lg:w-auto"
            >
              <div class="group relative">
                <div
                  class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200"
                >
                  <img
                    :src="restaurant.imageSrc"
                    :alt="restaurant.imageAlt"
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div class="mt-6">
                  <h3 class="mt-1 font-semibold text-gray-900">
                    <a :href="restaurant.href">
                      <span class="absolute inset-0" />
                      {{ restaurant.name }}
                    </a>
                  </h3>
                  <p class="text-sm text-gray-500">{{ restaurant.cuisine }}</p>
                  <p class="mt-1 text-gray-900">{{ restaurant.rating }} ★</p>
                </div>
              </div>

              <h4 class="sr-only">Restaurant details</h4>
              <ul
                role="list"
                class="mt-auto flex items-center justify-center space-x-3 pt-3"
              >
                <li>
                  <button
                    type="button"
                    class="rounded-full bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Book Now
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 px-4 sm:hidden">
        <a href="#" class="text-sm font-semibold text-red-600 hover:text-red-500">
          See everything
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Collection section -->
  <section aria-labelledby="location-heading">
    <div class="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-8">
      <div class="flex items-center justify-between px-4 sm:px-6 lg:px-0">
        <h2 id="trending-heading" class="text-2xl font-bold tracking-tight text-gray-900">
          Check 'em places out
        </h2>
        <a
          href="#"
          class="hidden text-sm font-semibold text-red-600 hover:text-red-500 sm:block"
        >
          See everywhere
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div class="mt-4 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        <a
          v-for="location in locations"
          :key="location.name"
          :href="location.href"
          class="group block"
        >
          <div
            aria-hidden="true"
            class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
          >
            <img
              :src="location.imageSrc"
              :alt="location.imageAlt"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <h3 class="mt-4 text-base font-semibold text-gray-900">
            {{ location.name }}
          </h3>
          <p class="mt-2 text-sm text-gray-500">{{ location.description }}</p>
        </a>
      </div>
    </div>
  </section>

  <!-- CTA section -->
  <section aria-labelledby="register-heading">
    <div class="overflow-hidden pt-32 sm:pt-14">
      <div class="bg-red-600">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="relative pb-16 pt-48 sm:pb-24">
            <div>
              <h2
                id="register-heading"
                class="text-4xl font-bold tracking-tight text-white md:text-5xl"
              >
                Join Our Platform
                <br />
                Reach Thousands of Diners.
              </h2>
              <div class="mt-6 text-base">
                <a href="#" class="font-semibold text-white">
                  Register Your Restaurant
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>

            <div
              class="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0"
            >
              <div class="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                <div
                  class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8"
                >
                  <div class="flex-shrink-0">
                    <img
                      class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                      src="https://placehold.co/350x400/fff/red?text=Attract+More+Customers"
                      alt="Attract More Customers"
                    />
                  </div>

                  <div class="mt-6 flex-shrink-0 sm:mt-0">
                    <img
                      class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                      src="https://placehold.co/350x400/fff/red?text=Easy+Online+Booking"
                      alt="Easy Online Booking"
                    />
                  </div>
                </div>
                <div
                  class="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8"
                >
                  <div class="flex-shrink-0">
                    <img
                      class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                      src="https://placehold.co/350x400/fff/red?text=Increase+Revenue"
                      alt="Increase Revenue"
                    />
                  </div>

                  <div class="mt-6 flex-shrink-0 sm:mt-0">
                    <img
                      class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                      src="https://placehold.co/350x400/fff/red?text=Grow+Your+Brand"
                      alt="Grow Your Brand"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const locations = [
  {
    name: "Kuala Lumpur",
    href: "#",
    imageSrc: "https://placehold.co/350x400/red/fff?text=Kuala+Lumpur",
    imageAlt: "Panoramic view of Kuala Lumpur cityscape with the Petronas Twin Towers.",
    description:
      "Explore the vibrant city of Kuala Lumpur, known for its modern skyline and diverse culture.",
  },
  {
    name: "Petaling Jaya",
    href: "#",
    imageSrc: "https://placehold.co/350x400/red/fff?text=Petaling+Jaya",
    imageAlt: "Busy street view of Petaling Jaya with modern buildings and local shops.",
    description:
      "Discover the bustling suburb of Petaling Jaya, a hub for shopping, dining, and entertainment.",
  },
  {
    name: "Subang Jaya",
    href: "#",
    imageSrc: "https://placehold.co/350x400/red/fff?text=Subang+Jaya",
    imageAlt:
      "Suburban view of Subang Jaya with residential areas and commercial centers.",
    description:
      "Enjoy the family-friendly environment of Subang Jaya, known for its parks and educational institutions.",
  },
];

const featuredRestaurants = [
  {
    id: 1,
    name: "The Grand Dining Room",
    imageSrc: "https://placehold.co/600x400/red/fff?text=The+Grand+Dining+Room",
    imageAlt: "Elegant restaurant setting with fine dining",
    cuisine: "Fine Dining",
    rating: 4.7,
    href: "/book/restaurant1",
  },
  {
    id: 2,
    name: "The Noodle House",
    imageSrc: "https://placehold.co/600x400/red/fff?text=The+Noodle+House",
    imageAlt: "Cozy setting with a variety of noodles",
    cuisine: "Casual Dining",
    rating: 4.5,
    href: "/book/restaurant2",
  },
  {
    id: 3,
    name: "Sushi Haven",
    imageSrc: "https://placehold.co/600x400/red/fff?text=Sushi+Haven",
    imageAlt: "Modern sushi restaurant",
    cuisine: "Japanese Cuisine",
    rating: 4.8,
    href: "/book/restaurant3",
  },
  {
    id: 4,
    name: "The Green Plate",
    imageSrc: "https://placehold.co/600x400/red/fff?text=The+Green+Plate",
    imageAlt: "Healthy vegetarian restaurant",
    cuisine: "Vegetarian & Vegan",
    rating: 4.6,
    href: "/book/restaurant4",
  },
];
</script>
