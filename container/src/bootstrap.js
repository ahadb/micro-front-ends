import { mount as appOneMount } from "appOne/AppOneIndex";
import { mount as appTwoMount } from "appTwo/AppTwoIndex";

console.log("==Container");

// never have an id in the container that uses `name` from the
// imported mfe from module federation
appOneMount(document.querySelector("#container-appOne"));
appTwoMount(document.querySelector("#container-appTwo"));
