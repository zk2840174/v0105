

import {ref} from "vue";

const useCount = () => {
    const countObj = ref({num: 10})

    const inc = (amount) => {
        countObj.value.num += amount
    }

    return {countObj,inc}
}

export default useCount