import {NYweb} from "./nyHTMLConverter.js"
import {newYorkBusinesses} from "/scripts/BusinessProvider.js"

const newYorkHTMLTarget = document.querySelector(".state")

export const NewYorkBusiness = () => {
    newYorkHTMLTarget.innerHTML = "<h2>New York Businessness</h2>"

    newYorkBusinesses.forEach(
        (newYorkArray) => {
            newYorkHTMLTarget.innerHTML +=NYweb(newYorkArray)
        }
    )
}