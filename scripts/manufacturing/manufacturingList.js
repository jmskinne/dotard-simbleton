import {manufacturingBusinesses} from "/scripts/BusinessProvider.js"
import {ManuWeb} from "./manuHTMLConverter.js"

const manufacturingHTMLTarget = document.querySelector(".manufacturing")

export const ManufacturingBusiness = () => {
    manufacturingHTMLTarget.innerHTML = "<h2>Manufacturing Businesses</h2>"
    manufacturingBusinesses.forEach(
        (manufacturingArray) => {
            manufacturingHTMLTarget.innerHTML += ManuWeb(manufacturingArray)
        }
    )
}