<template>
  <main class="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
    <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
      <div class="lg:col-span-5 lg:col-start-8">
        <div class="flex justify-between">
          <h1 class="text-xl font-medium text-gray-900">{{ restaurant.name }}</h1>
          <p class="text-xl font-medium text-gray-900">{{ restaurant.cuisine }}</p>
        </div>
        <!-- Ratings -->
        <div class="mt-4">
          <h2 class="sr-only">Ratings</h2>
          <div class="flex items-center">
            <p class="text-sm text-gray-700">
              {{ ratings.average }}
              <span class="sr-only"> out of 5 stars</span>
            </p>
            <div class="ml-1 flex items-center">
              <StarIcon
                v-for="rating in [0, 1, 2, 3, 4]"
                :key="rating"
                :class="[
                  ratings.average > rating ? 'text-yellow-400' : 'text-gray-200',
                  'h-5 w-5 flex-shrink-0',
                ]"
                aria-hidden="true"
              />
            </div>
            <div aria-hidden="true" class="ml-4 text-sm text-gray-300">·</div>
            <div class="ml-4 flex">
              <a
                href="#ratings"
                class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >See all {{ ratings.totalCount }} reviews</a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Image gallery -->
      <div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
        <h2 class="sr-only">Images</h2>

        <div class="masonry-grid">
          <img
            v-for="image in restaurant.images"
            :key="image.id"
            :src="image.imageSrc"
            :alt="image.imageAlt"
            class="masonry-item rounded-lg"
          />
        </div>
      </div>
      <div class="mt-8 lg:col-span-5">
        <button
          type="submit"
          class="w-full rounded-md border border-transparent bg-red-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Book Now
        </button>
        <!-- Restaurant details -->
        <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900">Description</h2>

          <div
            class="prose prose-sm mt-4 text-gray-500"
            v-html="restaurant.description"
          />
        </div>

        <div class="mt-8 border-t border-gray-200 pt-8">
          <h2 class="text-sm font-medium text-gray-900">Menu</h2>

          <div class="prose prose-sm mt-4 text-gray-500">
            <ul role="list">
              <li v-for="item in restaurant.menu" :key="item.name">
                {{ item.name }} - {{ item.price }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Policies -->
        <section aria-labelledby="policies-heading" class="mt-10">
          <h2 id="policies-heading" class="sr-only">Our Policies</h2>

          <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div
              v-for="policy in policies"
              :key="policy.name"
              class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
            >
              <dt>
                <component
                  :is="policy.icon"
                  class="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span class="mt-4 text-sm font-medium text-gray-900">{{
                  policy.name
                }}</span>
              </dt>
              <dd class="mt-1 text-sm text-gray-500">{{ policy.description }}</dd>
            </div>
          </dl>
        </section>
      </div>
    </div>

    <!-- Reviews -->
    <section id="ratings" aria-labelledby="reviews-heading" class="mt-16 sm:mt-24">
      <h2 id="reviews-heading" class="text-lg font-medium text-gray-900">
        Recent reviews
      </h2>

      <div
        class="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10"
      >
        <div
          v-for="review in reviews.featured"
          :key="review.id"
          class="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
        >
          <div
            class="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8"
          >
            <div class="flex items-center xl:col-span-1">
              <div class="flex items-center">
                <StarIcon
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :class="[
                    review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                    'h-5 w-5 flex-shrink-0',
                  ]"
                  aria-hidden="true"
                />
              </div>
              <p class="ml-3 text-sm text-gray-700">
                {{ review.rating }}<span class="sr-only"> out of 5 stars</span>
              </p>
            </div>

            <div class="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
              <h3 class="text-sm font-medium text-gray-900">{{ review.title }}</h3>

              <div class="mt-3 space-y-6 text-sm text-gray-500" v-html="review.content" />
            </div>
          </div>

          <div
            class="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3"
          >
            <p class="font-medium text-gray-900">{{ review.author }}</p>
            <time
              :datetime="review.datetime"
              class="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
              >{{ review.date }}</time
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Related restaurants -->
    <section aria-labelledby="related-heading" class="mt-16 sm:mt-24">
      <h2 id="related-heading" class="text-lg font-medium text-gray-900">
        Related restaurants
      </h2>

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="relatedRestaurant in relatedRestaurants"
          :key="relatedRestaurant.id"
          class="group relative"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="relatedRestaurant.imageSrc"
              :alt="relatedRestaurant.imageAlt"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="relatedRestaurant.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ relatedRestaurant.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ relatedRestaurant.cuisine }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">
              {{ relatedRestaurant.priceRange }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { StarIcon, GlobeAmericasIcon, CurrencyDollarIcon } from "@heroicons/vue/20/solid";

const restaurant = {
  name: "Gourmet Bistro",
  cuisine: "French",
  description: `
      <p>Gourmet Bistro offers a refined dining experience with an emphasis on fresh, locally-sourced ingredients. Enjoy classic French dishes with a modern twist in a warm and inviting atmosphere.</p>
    `,
  images: [
    {
      id: 1,
      imageSrc: "https://placehold.co/500x600/red/fff?text=Photo+1",
      imageAlt: "Dining area of Gourmet Bistro",
      primary: true,
    },
    {
      id: 2,
      imageSrc: "https://placehold.co/400x400/red/fff?text=Photo+2",
      imageAlt: "Close-up of a dish",
      primary: false,
    },
    {
      id: 3,
      imageSrc: "https://placehold.co/400x400/red/fff?text=Photo+3",
      imageAlt: "Close-up of a dish",
      primary: false,
    },
    {
      id: 3,
      imageSrc: "https://placehold.co/400x400/red/fff?text=Photo+3",
      imageAlt: "Close-up of a dish",
      primary: false,
    },
  ],
  menu: [
    { name: "Coq au Vin", price: "$25" },
    { name: "Ratatouille", price: "$20" },
    { name: "Crème Brûlée", price: "$10" },
  ],
};

const ratings = {
  average: 4.5,
  totalCount: 120,
};

const policies = [
  {
    name: "Reservations",
    description: "Reservations are recommended, especially during peak hours.",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Dress Code",
    description: "Smart casual attire is requested.",
    icon: CurrencyDollarIcon,
  },
];

const reviews = {
  featured: [
    {
      id: 1,
      title: "A Delightful Experience!",
      rating: 5,
      content: `<p>The food was exquisite and the service was impeccable. I highly recommend this place!</p>`,
      author: "Alice Johnson",
      date: "July 21, 2024",
      datetime: "2024-07-21T12:00:00Z",
    },
    {
      id: 2,
      title: "Great Atmosphere",
      rating: 4,
      content: `<p>Great atmosphere and good food, but a bit pricey.</p>`,
      author: "John Smith",
      date: "August 2, 2024",
      datetime: "2024-08-02T12:00:00Z",
    },
  ],
};

const relatedRestaurants = [
  {
    id: 1,
    name: "Le Petit Café",
    cuisine: "French",
    priceRange: "$$",
    imageSrc: "https://placehold.co/400x400/red/fff?text=Le+Petit+Café",
    imageAlt: "Le Petit Café",
    href: "#",
  },
  {
    id: 2,
    name: "Bistro Bon Appétit",
    cuisine: "French",
    priceRange: "$$$",
    imageSrc: "https://placehold.co/400x400/red/fff?text=Bistro+Bon+Appétit",
    imageAlt: "Bistro Bon Appétit",
    href: "#",
  },
  {
    id: 3,
    name: "Le Petit Café",
    cuisine: "French",
    priceRange: "$$",
    imageSrc: "https://placehold.co/400x400/red/fff?text=Le+Petit+Café",
    imageAlt: "Le Petit Café",
    href: "#",
  },
  {
    id: 4,
    name: "Bistro Bon Appétit",
    cuisine: "French",
    priceRange: "$$$",
    imageSrc: "https://placehold.co/400x400/red/fff?text=Bistro+Bon+Appétit",
    imageAlt: "Bistro Bon Appétit",
    href: "#",
  },
];
</script>

<style scoped>
.masonry-grid {
  column-count: 2; /* Number of columns */
  column-gap: 1rem; /* Gap between columns */
}

.masonry-item {
  display: block;
  margin-bottom: 1rem; /* Space between items in a column */
  break-inside: avoid; /* Avoid breaking items between columns */
}
</style>
