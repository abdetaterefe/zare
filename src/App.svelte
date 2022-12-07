<script lang="ts">
  import { EtDatetime, ETC, ConvertToEthiopic } from "abushakir";
  import DayCard from "./lib/DayCard.svelte";
  import Progress from "./lib/Progress.svelte";
  import EtoGConverterModal from "./lib/EtoGConverterModal.svelte";
  import GtoEConverterModal from "./lib/GtoEConverterModal.svelte";
  import ConvertButton from "./lib/ConvertButton.svelte";

  const now: EtDatetime = new EtDatetime();

  const currentDay = now.date.day;
  const currentMonth = now.date.month;
  const currentYear = now.date.year;
  const ethiopianCalendar: ETC = new ETC(currentYear, currentMonth, currentDay);

  const currentDayInGEEZ = ConvertToEthiopic(currentDay);
  const currentYearInGEEZ = ConvertToEthiopic(currentYear);

  const firstDayOfNextYear = new EtDatetime(currentYear + 1, 1, 1);
  const diff = firstDayOfNextYear.difference(now).inDays;

  const monthProgress = Math.round((currentDay / 30) * 100);
  const monthProgressInGEEZ = ConvertToEthiopic(monthProgress);
  const yearProgress = Math.round(100 - (diff / 365) * 100);
  const yearProgressInGEEZ = ConvertToEthiopic(yearProgress);

  const monthName = ethiopianCalendar.monthName;
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let number = 1;
  $: geezNumber = 1;
  $: if (number == null || number == 0) {
    number = 1;
  } else {
    geezNumber = ConvertToEthiopic(number);
  }
  let showModal = false;
  let showGtoEModal = false;
  const handleEtoGToggleModal = () => {
    showModal = !showModal;
  };
  const handleGtoEToggleModal = () => {
    showGtoEModal = !showGtoEModal;
  };
</script>

<main>
  <div class="py-6 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
    <p
      class="md:mt-32 md:text-8xl text-6xl shadow-ob p-2 border-4 border-black bg-blue-500"
    >
      ዛሬ ቀን
    </p>
    <!-- Day Card -->
    <DayCard
      {monthName}
      {currentDay}
      {currentYear}
      {currentDayInGEEZ}
      {currentYearInGEEZ}
    />
    <!-- Month Progress -->
    <Progress
      currentProgress={monthName}
      progressPercentInGEEZ={monthProgressInGEEZ}
      progressPercent={monthProgress}
    />
    <!-- Year Progress -->
    <Progress
      currentProgress={currentYear}
      progressPercentInGEEZ={yearProgressInGEEZ}
      progressPercent={yearProgress}
    />
  </div>
  <p class="text-6xl">⇓</p>
  <!-- GEEZ NUMBER CONVERTER -->
  <div class="py-6 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
    <div class="shadow-ob p-2 border-4 border-black bg-blue-500">
      <p class="md:text-8xl text-6xl">GE'EZ numbers</p>
      <p class="md:text-2xl">
        Realtime Arabic Number to Geez Number translator
      </p>
    </div>
    <div class="mt-5">
      <p class="text-left md:text-2xl">Enter number here</p>
      <div class="grid grid-cols-2 md:text-5xl text-3xl">
        <input
          bind:value={number}
          type="number"
          min="1"
          step="1"
          class="appearance-none block leading-tight shadow-ob p-2 border-4 border-black bg-orange-500 mr-6"
        />
        <span class="shadow-ob p-2 border-4 border-black bg-blue-500"
          >{geezNumber}</span
        >
      </div>
      <div class="mt-36 grid md:grid-cols-10 grid-cols-5 md:text-5xl text-3xl ">
        {#each numbers as num}
          <p class="m-2 shadow-ob p-2 border-2 border-black bg-blue-500">
            {num} <br />{ConvertToEthiopic(num)}
          </p>
        {/each}
      </div>
    </div>
  </div>
  <p class="text-6xl">⇓</p>
  <!-- DATE CONVERTER -->
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <p class="mt-36 mb-8 md:text-8xl text-5xl shadow-ob p-2 border-4 border-black bg-blue-500">Converter</p>
    <div class="mb-36 grid md:grid-cols-2 grid-cols-1 gap-3">
      <!-- EtoG -->
      <EtoGConverterModal
        open={showModal}
        on:close={() => handleEtoGToggleModal()}
      />
      <ConvertButton
        onClick={handleEtoGToggleModal}
        text="Ethiopian to Gregorian"
      />
      <!-- GtoE -->
      <GtoEConverterModal
        open={showGtoEModal}
        on:close={() => handleGtoEToggleModal()}
      />
      <ConvertButton
        onClick={handleGtoEToggleModal}
        text="Gregorian to Ethiopian"
      />
    </div>
  </div>
</main>
