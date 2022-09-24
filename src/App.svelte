<script lang="ts">
  import { EtDatetime, ETC, BahireHasab, ConvertToEthiopic } from "abushakir";
  import DayCard from "./lib/DayCard.svelte";
  import Progress from "./lib/Progress.svelte";
  import ConverterModal from "./lib/ConverterModal.svelte";

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
  const handleToggleModal = () => {
    showModal = !showModal;
  };
  const gregorian: number = Date.now();
</script>

<main>
  <p class="md:mt-72 md:text-8xl text-6xl">ዛሬ ቀን</p>
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

  <p class="mt-72 md:text-8xl text-6xl">GE'EZ numbers</p>
  <p class="md:text-2xl">Realtime Arabic Number to Geez Number translator</p>
  <div class="mt-5">
    <div class="grid grid-cols-2 md:text-5xl text-3xl">
      <input
        bind:value={number}
        type="number"
        min=1
        step="1"
        class="appearance-none block w-full bg-gray-200 border border-gray-200 dark:bg-gray-800 dark:border-gray-800 rounded p-3 leading-tight"
      />
      <span class="p-3">{geezNumber}</span>
    </div>
    <div class="mt-36 grid md:grid-cols-10 grid-cols-5 md:text-5xl text-3xl ">
      {#each numbers as num}
        <p class="rounded-lg border border-gray-500 shadow-md p-1 m-1">
          {num} <br />{ConvertToEthiopic(num)}
        </p>
      {/each}
    </div>
  </div>

  <p class="mt-72 md:text-8xl text-5xl">Converter</p>
  <div class="mb-36 grid md:grid-cols-2 grid-cols-1 gap-3">
    <button
      on:click={() => handleToggleModal()}
      class="md:text-2xl rounded px-4 py-2 font-bold bg-orange-500 hover:bg-orange-600"
      >Ethiopian to Gregorian</button
    >
    <button
      class="md:text-2xl rounded px-4 py-2 font-bold bg-orange-500 hover:bg-orange-600"
      >Gregorian to Ethiopian</button
    >
  </div>
  <ConverterModal open={showModal} on:close={() => handleToggleModal()} />
  <p>{new Date(gregorian).toDateString()}</p>
</main>
