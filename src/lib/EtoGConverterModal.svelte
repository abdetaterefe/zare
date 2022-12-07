<script async script lang="ts">
  import { EtDatetime } from "abushakir";
  import { createEventDispatcher } from "svelte";
  export let open = false;
  const dispatch = createEventDispatcher();
  const now: EtDatetime = new EtDatetime();

  let day: number = now.date.day;
  let month: number = now.date.month;
  let year: number = now.date.year;

  let outPutDay = 0;
  let outPutMonth = 0;
  let outPutYear = 0;

  async function convert() {
    const recieved: EtDatetime = new EtDatetime(year, month, day, 0, 0, 0, 0);
    const gregorian: Date = new Date(recieved.moment);
    outPutDay = gregorian.getDate();
    outPutMonth = gregorian.getMonth() + 1;
    outPutYear = gregorian.getFullYear();
  }
</script>

{#if open}
  <div
    class="modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0"
  >
    <div class="modal-overlay fixed w-full h-full bg-gray-900 opacity-50" />
    <div
      class="shadow-ob p-2 border-4 border-black bg-blue-500 w-full lg:h-max lg:w-1/2  mx-auto z-50 overflow-y-auto"
    >
      <div
        class="flex justify-between items-center head bg-blue-600 py-5 px-8 text-2xl font-extrabold"
      >
        Pick a date
        <button
          class="hover:bg-orange-600 ml-4 shadow-ob p-2 border-4 border-black bg-orange-500"
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
              class="appearance-none block w-full leading-tight shadow-ol p-2 border-2 border-black bg-orange-500"
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
              class="appearance-none block w-full leading-tight shadow-ol p-2 border-2 border-black bg-orange-500"
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
              class="appearance-none block w-full leading-tight shadow-ol p-2 border-2 border-black bg-orange-500"
            />
          </div>
        </div>
        <button
          on:click={() => convert()}
          class="md:text-2xl px-4 py-2 font-bold ml-4 shadow-ob p-2 border-4 border-black bg-orange-500 hover:bg-orange-600"
          >Ethiopian to Gregorian</button
        >
        <div class="grid grid-cols-3 gap-3 mt-3">
          <div>
            <p class="m-1 appearance-none block w-full leading-tight shadow-ol p-2 border-2 border-black bg-blue-600">
              {outPutDay}
            </p>
          </div>
          <div>
            <p class="m-1 appearance-none block w-full leading-tight shadow-ol p-2 border-2 border-black bg-blue-600">
              {outPutMonth}
            </p>
          </div>
          <div>
            <p class="m-1 appearance-none block w-full leading-tight shadow-ol p-2 border-2 border-black bg-blue-600">
              {outPutYear}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
