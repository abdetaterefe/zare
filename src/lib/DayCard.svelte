<script lang="ts">
  export let monthName = "";
  export let currentDay = "";
  export let currentYear = "";
  export let currentDayInGEEZ = "";
  export let currentYearInGEEZ = "";
</script>

<div
  class="grid mt-10 shadow-ob md:grid-cols-3 p-5 gap-5 border-4 border-black bg-blue-500"
>
  <div class="flex justify-center items-center">
    <p class="md:text-5xl text-3xl">{monthName}</p>
  </div>
  <div>
    <p class="md:text-5xl text-3xl">{currentDay} {currentYear}</p>
    <p class="md:text-5xl text-3xl my-3">
      {currentDayInGEEZ}
      {currentYearInGEEZ}
    </p>
  </div>
  <div class="flex justify-center items-center">
    <p class="md:text-8xl text-6xl">ነው ።</p>
  </div>
</div>
