<script lang="ts">
  export let onClick: Function;
  export let text: string;
</script>

<button
  on:click={() => onClick()}
  class="md:text-2xl px-4 py-2 font-bold shadow-ob p-2 border-4 border-black bg-orange-500 hover:bg-orange-600"
  >{text}</button
>
