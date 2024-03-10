<script>
import ComponentInput from "./input.vue";
import ComponentCheckbox from "./checkbox.vue";
import ComponentWarning from "./warning.vue";

import bClassRegex from "@/assets/regex-generator.js";

export default {
  name: "Home",
  components: {
    ComponentInput,
    ComponentCheckbox,
    ComponentWarning,
  },
  data() {
    return {
      warningText: "",
      config: {
        upperCase: false,
        lowerCase: false,
        caseSensitive: false,
      },
      data: {
        includes: [],
        excludes: [],
      },
    };
  },
  computed: {
    // * regex content
    resultRegex() {
      // const result = bClassRegex({
      //   upperCase: true,
      //   lowerCase: false,
      //   caseSensitive: false,
      //   includes: ["abc", "123"],
      //   excludes: ["xyz", "abcd"],
      // });
      // * Control: overlash control in uppercase and lowercase settings
      if (this.config?.upperCase && this.config?.lowerCase) {
        this.warningText =
          "Error: 'uppercase' and 'Lowercase' settings contradict each other.";
        return "Error";
      }

      // * Control: Cassage control in Cassesense, LowerCase and Uppercase settings
      if (
        this.config?.caseSensitive &&
        (this.config?.lowerCase || this.config?.upperCase)
      ) {
        this.warningText =
          "Error: 'Cassesensitive', 'Lowercase' or 'uppercase' settings contradict each other.";
        return "Error";
      }

      // * Control: Construction in Includes and Excludes series
      if (this.data?.includes && this.data?.excludes) {
        const intersection = this.data.includes.filter((value) =>
          this.data.excludes.includes(value)
        );
        if (intersection.length > 0) {
          this.warningText =
            "Error: There are coincidences in the series 'Includes' and 'Excludes'.";
          return "Error";
        }
      }
      // * clear warning
      this.warningText = "";
      const result = bClassRegex({
        upperCase: this.config?.upperCase,
        lowerCase: this.config?.lowerCase,
        caseSensitive: this.config?.caseSensitive,
        includes: this.data?.includes,
        excludes: this.data?.excludes,
      });
      return result;
    },
  },
  methods: {
    changeValue(event) {
      const dataType = String(event[0]);
      if (this.config.hasOwnProperty(dataType))
        return (this.config[dataType] = event[1]);
      if (this.data.hasOwnProperty(dataType)) {
        const list = event[1]
          .split(",")
          .filter(function (item) {
            return item != "" && item != " ";
          })
          .map(function (item) {
            return item.trim();
          });
        return (this.data[dataType] = list);
      }
      console.error("incorrect type");
    },
  },
};
</script>

<template>
  <div>
    <div className="m-8">
      <div className="container mx-auto border-x-4 rounded-xl p-4 shadow-xl">
        <fieldset>
          <ComponentInput
            :title="'Regex'"
            :type="'regex'"
            :description="this.resultRegex"
          />

          <ComponentWarning v-if="warningText" :text="warningText" />

          <ComponentInput
            :title="'Includes'"
            :type="'includes'"
            @valueData="changeValue"
            :description="'Text: abc, def'"
          />

          <ComponentInput
            :title="'Excludes'"
            :type="'excludes'"
            @valueData="changeValue"
            :description="'Text: abc, def'"
          />

          <div class="flex flex-col gap-3 mt-3">
            <ComponentCheckbox
              :title="'Uppercase'"
              :type="'upperCase'"
              @valueData="changeValue"
            />

            <ComponentCheckbox
              :title="'Lowercase'"
              :type="'lowerCase'"
              @valueData="changeValue"
            />

            <ComponentCheckbox
              :title="'Casesensitive'"
              :type="'caseSensitive'"
              @valueData="changeValue"
            />
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>
