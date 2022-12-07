<script lang="ts">
  export let currentProgress = "";
  export let progressPercentInGEEZ = "";
  export let progressPercent = 0;
</script>

<div class="mt-5">
  <div class="flex justify-between mb-1">
    <span>{currentProgress} progress is </span>
    <span>{progressPercentInGEEZ} or {progressPercent} %</span>
  </div>
  <div class="bg-blue-500 w-full shadow-ob border-2 border-black">
    <div
      class="bg-orange-500 h-6"
      style="width: {progressPercent}%;"
    />
  </div>
</div>
