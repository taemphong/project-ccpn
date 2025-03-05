<template>
    <div>
      <v-checkbox
        v-model="localSelected"
        @change="updateSelected"
        :label="label"
        :value="value"
      ></v-checkbox>
  
      <p v-if="localSelected">ปริญญาเอก</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selected: Array, 
    },
    data() {
      return {
        label: "ปริญญาเอก",
        value: "ปริญญาเอก",
        localSelected: false, 
      };
    },
    watch: {
      selected: {
        handler(newVal) {
          this.localSelected = newVal.includes(this.value); 
        },
        immediate: true,
      },
    },
    methods: {
      updateSelected() {
        let newSelected = [...this.selected]; 
        if (this.localSelected) {
   
          if (!newSelected.includes(this.value)) {
            newSelected.push(this.value);
          }
        } else {
 
          newSelected = newSelected.filter((item) => item !== this.value);
        }
        this.$emit("update:selected", newSelected);
      },
    },
  };
  </script>
  