import {agentsOnly} from "/scripts/BusinessProvider.js"
import {AgentWeb} from "./agentHTMLConverter.js"

const agentHTMLTarget = document.querySelector(".agent")

export const AgentBusiness = () => {
    agentHTMLTarget.innerHTML = "<h2>Agent Info<h2>"
    agentsOnly.forEach(
        (agentArray) => {
            agentHTMLTarget.innerHTML += AgentWeb(agentArray)
        }
    )
}