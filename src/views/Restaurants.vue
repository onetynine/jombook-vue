<template>
  <!-- Mobile filter dialog -->
  <TransitionRoot as="template" :show="mobileFiltersOpen">
    <Dialog class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 z-40 flex">
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="translate-x-full"
        >
          <DialogPanel
            class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"
          >
            <div class="flex items-center justify-between px-4">
              <h2 class="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                class="relative -mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                @click="mobileFiltersOpen = false"
              >
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Filters -->
            <form class="mt-4 border-t border-gray-200">
              <h3 class="sr-only">Categories</h3>
              <ul role="list" class="px-2 py-3 font-medium text-gray-900">
                <li v-for="category in subCategories" :key="category.name">
                  <a :href="category.href" class="block px-2 py-3">{{ category.name }}</a>
                </li>
              </ul>

              <Disclosure
                as="div"
                v-for="section in filters"
                :key="section.id"
                class="border-t border-gray-200 px-4 py-6"
                v-slot="{ open }"
              >
                <h3 class="-mx-2 -my-3 flow-root">
                  <DisclosureButton
                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                  >
                    <span class="font-medium text-gray-900">{{ section.name }}</span>
                    <span class="ml-6 flex items-center">
                      <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                      <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-6">
                    <div
                      v-for="(option, optionIdx) in section.options"
                      :key="option.value"
                      class="flex items-center"
                    >
                      <input
                        :id="`filter-mobile-${section.id}-${optionIdx}`"
                        :name="`${section.id}[]`"
                        :value="option.value"
                        type="checkbox"
                        :checked="option.checked"
                        class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <label
                        :for="`filter-mobile-${section.id}-${optionIdx}`"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >{{ option.label }}</label
                      >
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </form>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

  <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900">
        Explore Our Restaurants
      </h1>

      <div class="flex items-center">
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Sort
              <ChevronDownIcon
                class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1">
                <MenuItem
                  v-for="option in sortOptions"
                  :key="option.name"
                  v-slot="{ active }"
                >
                  <a
                    :href="option.href"
                    :class="[
                      option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm',
                    ]"
                    >{{ option.name }}</a
                  >
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>

        <button
          type="button"
          class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
        >
          <span class="sr-only">View grid</span>
          <Squares2X2Icon class="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
          @click="mobileFiltersOpen = true"
        >
          <span class="sr-only">Filters</span>
          <FunnelIcon class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>

    <section aria-labelledby="products-heading" class="pb-24 pt-6">
      <h2 id="products-heading" class="sr-only">Products</h2>

      <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        <!-- Filters -->
        <form class="hidden lg:block">
          <h3 class="sr-only">Categories</h3>
          <ul
            role="list"
            class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
          >
            <li v-for="category in subCategories" :key="category.name">
              <a :href="category.href">{{ category.name }}</a>
            </li>
          </ul>

          <Disclosure
            as="div"
            v-for="section in filters"
            :key="section.id"
            class="border-b border-gray-200 py-6"
            v-slot="{ open }"
          >
            <h3 class="-my-3 flow-root">
              <DisclosureButton
                class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
              >
                <span class="font-medium text-gray-900">{{ section.name }}</span>
                <span class="ml-6 flex items-center">
                  <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                  <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </h3>
            <DisclosurePanel class="pt-6">
              <div class="space-y-4">
                <div
                  v-for="(option, optionIdx) in section.options"
                  :key="option.value"
                  class="flex items-center"
                >
                  <input
                    :id="`filter-${section.id}-${optionIdx}`"
                    :name="`${section.id}[]`"
                    :value="option.value"
                    type="checkbox"
                    :checked="option.checked"
                    class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label
                    :for="`filter-${section.id}-${optionIdx}`"
                    class="ml-3 text-sm text-gray-600"
                    >{{ option.label }}</label
                  >
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </form>

        <!-- Product grid -->
        <div
          class="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-3 lg:gap-x-8"
        >
          <a
            v-for="restaurant in restaurants"
            :key="restaurant.id"
            :href="restaurant.href"
            class="group text-sm"
          >
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75"
            >
              <img
                :src="restaurant.imageSrc"
                :alt="restaurant.imageAlt"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <h3 class="mt-4 font-medium text-gray-900">{{ restaurant.name }}</h3>
            <p class="italic text-gray-500">{{ restaurant.location }}</p>
            <p class="mt-2 font-medium text-gray-900">{{ restaurant.price }}</p>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/vue/20/solid";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Fine Dining", href: "#" },
  { name: "Casual Dining", href: "#" },
  { name: "Buffets", href: "#" },
  { name: "Food Trucks", href: "#" },
  { name: "Cafés", href: "#" },
  { name: "Bakeries", href: "#" },
];

const filters = [
  {
    id: "cuisine",
    name: "Cuisine",
    options: [
      { value: "malaysian", label: "Malaysian", checked: false },
      { value: "chinese", label: "Chinese", checked: false },
      { value: "indian", label: "Indian", checked: false },
      { value: "western", label: "Western", checked: false },
      { value: "japanese", label: "Japanese", checked: false },
      { value: "italian", label: "Italian", checked: false },
    ],
  },
  {
    id: "location",
    name: "Location",
    options: [
      { value: "kuala-lumpur", label: "Kuala Lumpur", checked: false },
      { value: "petaling-jaya", label: "Petaling Jaya", checked: false },
      { value: "subang-jaya", label: "Subang Jaya", checked: false },
      { value: "cheras", label: "Cheras", checked: false },
      { value: "ampang", label: "Ampang", checked: false },
      { value: "klang", label: "Klang", checked: false },
    ],
  },
  {
    id: "price",
    name: "Price Range",
    options: [
      { value: "low", label: "below RM30 / person", checked: false },
      { value: "medium", label: "between RM31 - RM99 / person", checked: false },
      { value: "high", label: "higher than RM100 / person", checked: false },
    ],
  },
];

const restaurants = [
  {
    id: 1,
    name: "The Urban Bistro",
    href: "#",
    price: "$$",
    location: "Kuala Lumpur",
    imageSrc: "https://placehold.co/400x400/red/fff?text=The+Urban+Bistro",
    imageAlt: "Cozy dining area with modern decor and a selection of dishes.",
  },
  {
    id: 2,
    name: "Taste of Malaysia",
    href: "#",
    price: "$",
    location: "Petaling Jaya",
    imageSrc: "https://placehold.co/400x400/red/fff?text=Taste+of+Malaysia",
    imageAlt: "Traditional Malaysian dishes served in a casual setting.",
  },
  {
    id: 3,
    name: "Café de Lumière",
    href: "#",
    price: "$$$",
    location: "Subang Jaya",
    imageSrc: "https://placehold.co/400x400/red/fff?text=Café+de+Lumière",
    imageAlt: "Elegant café with a bright and airy atmosphere.",
  },
  {
    id: 4,
    name: "Seafood Haven",
    href: "#",
    price: "$$$",
    location: "Cheras",
    imageSrc: "https://placehold.co/400x400/red/fff?text=Seafood+Haven",
    imageAlt: "Platter of fresh seafood served in an upscale restaurant.",
  },
  {
    id: 5,
    name: "The Green Leaf Café",
    href: "#",
    price: "$$",
    location: "Ampang",
    imageSrc: "https://placehold.co/400x400/red/fff?text=The+Green+Leaf+Café",
    imageAlt: "Healthy and fresh dishes in a modern café setting.",
  },
  {
    id: 6,
    name: "Klang Grill House",
    href: "#",
    price: "$$$",
    location: "Klang",
    imageSrc: "https://placehold.co/400x400/red/fff?text=Klang+Grill+House",
    imageAlt: "Grilled steaks and a refined dining experience.",
  },
];

const footerNavigation = {
  account: [
    { name: "Manage Account", href: "#" },
    { name: "Saved Items", href: "#" },
    { name: "Orders", href: "#" },
    { name: "Redeem Gift card", href: "#" },
  ],
  service: [
    { name: "Shipping & Returns", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Find a store", href: "#" },
    { name: "Get in touch", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  connect: [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Pinterest", href: "#" },
  ],
};

const mobileMenuOpen = ref(false);
const mobileFiltersOpen = ref(false);
</script>
