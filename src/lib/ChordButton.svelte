<script lang="ts">
    export let isActive = false;
    let note:string, type:string;
  </script>
  
    <main>
        <div
        class="board-button"
      ></div>
        {isActive}
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
    border-radius: 8px;
  }
  </style>
  