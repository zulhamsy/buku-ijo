<template>
  <table class="hidden md:table table w-full table-compact table-zebra">
    <thead>
      <tr>
        <th>Tanggal</th> 
        <th>Nomor ND</th> 
        <th>Perihal</th>
        <th>Perekam</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <td>Oct 13, 2021</td> 
        <td>ND-13</td> 
        <td>Pengiriman SPHP a.n Mirfat</td>
        <td>Zulham Syafrawi</td>
      </tr>
    </tbody>
  </table>
  <!-- Card when small breakpoint -->
  <div class="md:hidden space-y-4">
    <div class="card shadow">
      <div class="card-body">
        <p class="flex justify-between items-center">
          <span class="font-medium text-md text-gray-400">ND-13</span>
          <span class="font-thin text-sm text-gray-400">Oct 13, 2021</span>
        </p>
        <p class="text-lg font-medium mb-3">
          Pengiriman SPHP a.n Mirfat
        </p>
        <p class="italic text-xs text-right text-gray-400">
          Zulham Syafrawi
        </p>
      </div>
    </div>
    <div class="card shadow">
      <div class="card-body">
        <p class="flex justify-between items-center">
          <span class="font-medium text-md text-gray-400">ND-13</span>
          <span class="font-thin text-sm text-gray-400">Oct 13, 2021</span>
        </p>
        <p class="text-lg font-medium mb-3">
          Pengiriman SPHP a.n Mirfat
        </p>
        <p class="italic text-xs text-right text-gray-400">
          Zulham Syafrawi
        </p>
      </div>
    </div>
  </div>
</template>