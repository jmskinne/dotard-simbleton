import {completeBusinessList} from "./BusinessProvider.js"
import {businessWeb} from "./Business.js"

const htmlTarget = document.querySelector(".activeBusinesses")

export const BusinessTime = () => {
    htmlTarget.innerHTML = "<h1>Active Businesses</h1>"

    completeBusinessList.forEach(
        (businessesArray) => {
            htmlTarget.innerHTML += businessWeb(businessesArray)
        }
    )
}