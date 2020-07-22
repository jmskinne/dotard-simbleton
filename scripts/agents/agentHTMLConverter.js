export const AgentWeb = (agentArray) => {
    return `
        <article class="agents">
            <div class="agent__name">${agentArray.firstName} ${agentArray.lastName}</div>
            <div class="agent__company>${agentArray.company}</div>
            <div class="agent__phone>${agentArray.phone}</div>
        </article>
    `
}