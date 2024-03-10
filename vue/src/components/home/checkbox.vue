<script>
export default {
  name: "Checkbox",
  props: {
    title: String,
    type:  String,
  },
  methods: {
    changeValue(event) {
      const val = event.target.checked;
      this.$emit("valueData", [this.type,val]);
    },
  },
};
</script>

<<template>
    <div>
        <div class="flex items-center">
          <input
          @input="changeValue"
            :id="'checkbox-'+type"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <label
            :for="'checkbox-'+type"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
          >
          {{ title }}
          </label>
        </div> 
    </div>
</template>