### React Fragment Keys
Took me a few hours but I resolved this issue from Inspect.. I was placing the fragment key id everywhere, added import React, { Fragment } from react, added the id property to every object possible.. but eventually fixed the issue..

https://reactjs.org/docs/lists-and-keys.html#keys



### I must have written over the CRUD code a million times
Next time when I build my input code, I will use generic terminology instead of using themed ones 



### Routes... Routes... and more Routes...
Spent hours trying to figure out how to make the data component results appear under the main and mid body containers.. ended up moving the container components out of APP.js and into the data component and then calling that container as the landing page in App.JS 