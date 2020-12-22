import {counter} from "./domelements"
import {totalNumber} from "./variables"

function updateCount(){
    counter.textContent = `There are ${totalNumber} items on the lists in total`;
}

export default updateCount