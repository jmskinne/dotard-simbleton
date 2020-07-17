import {businessCollection} from "./BusinessProvider.js"

const completeBusinessList = businessCollection()



/* 
keys:
companyName
addressFullStreet
addressCity
addressStateCode
addressZipCode



*/

completeBusinessList.forEach((item) => {
    console.log(item.companyName, item.addressFullStreet)
})

