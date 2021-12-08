<script lang="ts">
  export let isActive = false,
    isLatest = false;
  let note: string, type: string;
</script>

<main>
  <div
    class={`board-button ${isActive ? "active" : ""} ${
      isLatest ? "latest" : ""
    }`}
  />
</main>

<style>
  .board-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    width: 50px;
    height: 50px;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
  .board-button.active {
    background: #04a8bc;
    border-color: #04a8bc;
  }
  .board-button.active.latest {
    background: #061d42;
    border-color: #061d42;
  }
</style>
