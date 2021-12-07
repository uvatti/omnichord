<script lang="ts">
  export let keys: string[];
</script>

<div class="container">
  {#each keys as key}
    <div class="key">{key}</div>
  {/each}
</div>

<style>
  .container {
    display: flex;
    margin-left: 30px;
  }
  .key {
    width: 70px;
  }
</style>
