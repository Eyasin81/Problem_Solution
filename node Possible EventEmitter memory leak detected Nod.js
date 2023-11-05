const v8=require('v8')


// Method-1
// console.log(v8.getHeapStatistics())
/* 
// first time output Show


Administrator@DESKTOP-GARLJAI MINGW64 /g/Rabbil_Code/7_React_Redux

$ node index.js
{
  total_heap_size: 4079616,
  total_heap_size_executable: 262144,
  total_physical_size: 4079616,
  total_available_size: 2132227600,
  used_heap_size: 3351912,
  heap_size_limit: 2134638592,
  malloced_memory: 262264,
  peak_malloced_memory: 106848,
  does_zap_garbage: 0,
  number_of_native_contexts: 2,
  number_of_detached_contexts: 0,
  total_global_handles_size: 8192,
  used_global_handles_size: 2400,
  external_memory: 1304327
}

*/
const totalHeapSize=v8.getHeapStatistics().total_available_size
let totalHeapSizeInGB=(totalHeapSize/1024/1024/1024).toFixed(2)
// Method -2
// console.log(`Total heap size (bytes) ${totalHeapSize}, (GB ~${totalHeapSizeInGB})`)
/* 
<=================== method-2 Output Start==============>
Administrator@DESKTOP-GARLJAI MINGW64 /g/Rabbil_Code/7_React_Redux
$ node index.js
Total heap size (bytes) 2132227216, (GB ~1.99)
<=================== method-2 Output End==============>
 */
// terminal use 
/* Administrator@DESKTOP-GARLJAI MINGW64 /g/Rabbil_Code/7_React_Redux
====================First CMD ===========>
$ node --max-old-space-size=4096 index.js
Total heap size (bytes) 4342887576, (GB ~4.04)
===================First Command END ==========

Administrator@DESKTOP-GARLJAI MINGW64 /g/Rabbil_Code/7_React_Redux

$ node --max-old-space-size=16000 index.js
Total heap size (bytes) 16825136280, (GB ~15.67)

====================Second CMD ===========>
$ node --max-old-space-size=4096 index.js
Total heap size (bytes) 4342887576, (GB ~4.04)
===================Second END ==========


*/