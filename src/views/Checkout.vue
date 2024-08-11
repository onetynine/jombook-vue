<template>
  <main class="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <h1 class="sr-only">Booking</h1>

      <form class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        <!-- Contact Information -->
        <div>
          <div>
            <h2 class="text-lg font-medium text-gray-900">Contact information</h2>

            <div class="mt-4">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Email address</label
              >
              <div class="mt-1">
                <input
                  type="email"
                  id="email-address"
                  name="email-address"
                  autocomplete="email"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <!-- Personal Information -->
          <div class="mt-10 border-t border-gray-200 pt-10">
            <h2 class="text-lg font-medium text-gray-900">Personal information</h2>

            <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div>
                <label for="first-name" class="block text-sm font-medium text-gray-700"
                  >First name</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="last-name" class="block text-sm font-medium text-gray-700"
                  >Last name</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    autocomplete="family-name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700"
                  >Phone</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autocomplete="tel"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Reservation Details -->
          <div class="mt-10 border-t border-gray-200 pt-10">
            <h2 class="text-lg font-medium text-gray-900">Reservation details</h2>

            <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div>
                <label for="date" class="block text-sm font-medium text-gray-700"
                  >Date</label
                >
                <div class="mt-1">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="time" class="block text-sm font-medium text-gray-700"
                  >Time</label
                >
                <div class="mt-1">
                  <input
                    type="time"
                    id="time"
                    name="time"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="guests" class="block text-sm font-medium text-gray-700"
                  >Number of guests (Max: 4)</label
                >
                <div class="mt-1">
                  <input
                    type="number"
                    name="guests"
                    id="guests"
                    min="1"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Voucher Apply -->
          <div class="mt-10 border-t border-gray-200 pt-10">
            <h2 class="text-lg font-medium text-gray-900">Apply Voucher</h2>

            <div class="mt-4">
              <label for="voucher" class="block text-sm font-medium text-gray-700"
                >Voucher Code</label
              >
              <div class="mt-1 flex">
                <input
                  type="text"
                  id="voucher"
                  name="voucher"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  placeholder="Enter your voucher code"
                />
                <button
                  type="button"
                  class="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Apply
                </button>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Enter your voucher code to apply any discounts.
              </p>
            </div>
          </div>

          <!-- Special Requests -->
          <div class="mt-10 border-t border-gray-200 pt-10">
            <h2 class="text-lg font-medium text-gray-900">Special requests</h2>

            <div class="mt-4">
              <label for="requests" class="block text-sm font-medium text-gray-700"
                >Special requests</label
              >
              <div class="mt-1">
                <textarea
                  id="requests"
                  name="requests"
                  rows="4"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- Booking Summary -->
        <div class="mt-10 lg:mt-0">
          <h2 class="text-lg font-medium text-gray-900">Booking summary</h2>

          <div class="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
            <dl class="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
              <div class="flex items-center justify-between">
                <dt class="text-sm">Date & Time</dt>
                <dd class="text-sm font-medium text-gray-900">
                  {{ date }} at {{ time }}
                </dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="text-sm">Number of guests (Max: 4)</dt>
                <dd class="text-sm font-medium text-gray-900">{{ guests }}</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="text-sm">Voucher Applied</dt>
                <dd class="text-sm font-medium text-gray-900">FIRSTONE (10% off)</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="text-sm">Discount</dt>
                <dd class="text-sm font-medium text-gray-900">- RM9.88</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="text-sm">Special requests</dt>
                <dd class="text-sm font-medium text-gray-900">{{ requests }}</dd>
              </div>
              <div
                class="flex items-center justify-between border-t border-gray-200 pt-6"
              >
                <dt class="text-base font-medium">Total</dt>
                <dd class="text-base font-medium text-gray-900">RM75.52</dd>
              </div>
            </dl>

            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
              <button
                type="submit"
                class="w-full rounded-md border border-transparent bg-red-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Confirm booking
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
const date = ref("2024-08-11");
const time = ref("19:00"); // 7:00 PM
const guests = ref(4);
const requests = ref("Vegetarian options, window seat");
</script>
