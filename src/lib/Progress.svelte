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
  <div class="bg-gray-200 dark:bg-gray-800 w-full rounded-full h-6">
    <div
      class="bg-orange-600 h-6 rounded-full"
      style="width: {progressPercent}%;"
    />
  </div>
</div>
