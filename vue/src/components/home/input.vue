<script>
export default {
  name: "Input",
  props: {
    title: String,
    type: String,
    description: String,
  },
  methods: {
    changeValue(event) {
      const val = event.target.value;
      this.$emit("valueData", [this.type, val]);
    },
  },
};
</script>

<template>
  <div>
    <div v-if="type == 'regex'">
      <div class="relative z-0 w-full mb-5 group">
        <label
          :for="'floating_' + type"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >{{ title }}</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
          >
            <svg
              class="w-4 h-4"
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 1 1 .707.707Zm9.9-.707a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.314.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707ZM6 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-6.5a.5.5 0 0 0-1 0v2.117L8.257 5.57a.5.5 0 0 0-.514.858L9.528 7.5 7.743 8.571a.5.5 0 1 0 .514.858L10 8.383V10.5a.5.5 0 1 0 1 0V8.383l1.743 1.046a.5.5 0 0 0 .514-.858L11.472 7.5l1.785-1.071a.5.5 0 1 0-.514-.858L11 6.617V4.5Z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            :id="'floating_' + type"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            readonly=""
            :value="description"
          />
        </div>
      </div>
    </div>
    <div v-else class="relative z-0 w-full group mt-5">
      <input
        @input="changeValue"
        type="text"
        :name="'floating_' + type"
        :id="'floating_' + type"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
      />
      <label
        :for="'floating_' + type"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {{ title }}
      </label>
      <small
        class="font-mono font-thin text-xs bg-slate-500 py-1 px-2 rounded-md"
      >
        {{ description }}
      </small>
    </div>
  </div>
</template>
