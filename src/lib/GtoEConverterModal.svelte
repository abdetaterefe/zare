<script async script lang="ts">
  import { EtDatetime } from "abushakir";
  import { createEventDispatcher } from "svelte";
  export let open = false;
  const dispatch = createEventDispatcher();

  const now: Date = new Date(Date.now());
  console.log(now)
  let day: number = now.getDate();
  let month: number = now.getMonth() + 1;
  let year: number = now.getFullYear();

  let outPutDay = 0;
  let outPutMonth = 0;
  let outPutYear = 0;

  async function convert() {
    const recieved = new EtDatetime(Date.parse(`${year}-${month}-${day}`));
    outPutDay = recieved.date.day + 1;
    outPutMonth = recieved.date.month;
    outPutYear = recieved.date.year;
  }
</script>

{#if open}
  <div
    class="modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0"
  >
    <div class="modal-overlay fixed w-full h-full bg-gray-900 opacity-50" />
    <div
      class="bg-white dark:bg-black w-full lg:h-max lg:w-1/2  mx-auto rounded-lg shadow-xl z-50 overflow-y-auto"
    >
      <div
        class="flex justify-between items-center head bg-gray-100 dark:bg-gray-900 py-5 px-8 text-2xl font-extrabold"
      >
        Pick a date
        <button
          class="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 hover:dark:bg-gray-700 rounded-full ml-4"
          on:click={() => dispatch("close")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            ><path d="M0 0h24v24H0V0z" fill="none" /><path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            /></svg
          >
        </button>
      </div>
      <div class="content p-8">
        <div class="grid grid-cols-3 gap-3 mb-3">
          <div>
            <p for="">date</p>
            <input
              required
              type="number"
              bind:value={day}
              min="1"
              minlength="1"
              max="30"
              maxlength="2"
              class="appearance-none block w-full bg-gray-200 border border-gray-200 dark:bg-gray-800 dark:border-gray-800 rounded p-3 leading-tight"
            />
          </div>
          <div>
            <p for="">month</p>
            <input
              required
              type="number"
              bind:value={month}
              min="1"
              minlength="1"
              max="13"
              maxlength="2"
              class="appearance-none block w-full bg-gray-200 border border-gray-200 dark:bg-gray-800 dark:border-gray-800 rounded p-3 leading-tight"
            />
          </div>
          <div>
            <p for="">year</p>
            <input
              required
              type="number"
              bind:value={year}
              min="1"
              minlength="1"
              max="9999"
              maxlength="4"
              class="appearance-none block w-full bg-gray-200 border border-gray-200 dark:bg-gray-800 dark:border-gray-800 rounded p-3 leading-tight"
            />
          </div>
        </div>
        <button
          on:click={() => convert()}
          class="md:text-2xl rounded px-4 py-2 font-bold bg-orange-500 hover:bg-orange-600"
          >Gregorian to Ethiopian</button
        >
        <div class="grid grid-cols-3 gap-3 mt-3">
          <div>
            <p class="rounded-lg border border-gray-500 shadow-md p-1 m-1">
              {outPutDay}
            </p>
          </div>
          <div>
            <p class="rounded-lg border border-gray-500 shadow-md p-1 m-1">
              {outPutMonth}
            </p>
          </div>
          <div>
            <p class="rounded-lg border border-gray-500 shadow-md p-1 m-1">
              {outPutYear}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
