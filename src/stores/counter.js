// import { ref } from "vue";
// import { defineStore } from "pinia";

// export const useFetchStore = defineStore("fetch", () => {
//   const message = ref("");
//   const url = "https://test-rtc.onrender.com";


//   async function fetchRender(){
//     try {
//       const response  = fetch(url);
//       const data = await response.json();
//       message.value = data.message;
//       console.log(data);
//     } catch (error) {
//       console.log(error)
//     }
//   };
//   return{message  , fetchRender};
// })
