
const completeBusinessList = businessCollection()


BusinessTime()

//filter businesslist to give array of New York Businessness
const newYorkBusinesses = completeBusinessList.filter(businessArray => businessArray.addressStateCode === "NY")

//move to NewYorkList.js
const newYorkHTMLTarget = document.querySelector(".state")

const NewYorkBusiness = () => {
    newYorkHTMLTarget.innerHTML = "<h2>New York Businessness</h2>"

    newYorkBusinesses.forEach(
        (newYorkArray) => {
            newYorkHTMLTarget.innerHTML +=NYweb(newYorkArray)
        }
    )
}

// accepts filtered New York array to create html, move to NewYork.js
const NYweb = (NewYorkArray) => {
    return `
        <article class="businessList-newYork>
            <div class="company__name">${NewYorkArray.companyName}</div>
            <div class="address">${NewYorkArray.addressFullStreet}</div>
            <div class="company__cityStZip">${NewYorkArray.addressCity}, ${NewYorkArray.addressStateCode} ${NewYorkArray.addressZipCode}</div>
        </article>
    `
}
//run on main.js
NewYorkBusiness()


//filter business list to provide array of manufacturing businesses
const manufacturingBusinesses = completeBusinessList.filter(businessArray => businessArray.companyIndustry === "Manufacturing")

//move to manufacturing.js
const manufacturingHTMLTarget = document.querySelector(".manufacturing")

const ManufacturingBusiness = () => {
    manufacturingHTMLTarget.innerHTML = "<h2>Manufacturing Businesses</h2>"
    manufacturingBusinesses.forEach(
        (manufacturingArray) => {
            manufacturingHTMLTarget.innerHTML += ManuWeb(manufacturingArray)
        }
    )
}

const ManuWeb = (manufacturingArray) => {
    return `
        <article class="businessList-manufacturing">
            <div class="company__name">${manufacturingArray.companyName}</div>
            <div class="address">${manufacturingArray.addressFullStreet}</div>
            <div class="company__cityStZip">${manufacturingArray.addressCity}, ${manufacturingArray.addressStateCode} ${manufacturingArray.addressZipCode}</div>
    </article>
    `
}

ManufacturingBusiness()


//beginning agent

const agentsOnly = completeBusinessList.map(businessArray => ({ 
    firstName : businessArray.purchasingAgent.nameFirst,
    lastName : businessArray.purchasingAgent.nameLast,
    company : businessArray.companyName,
    phone : businessArray.phoneWork

    
  }))

const agentHTMLTarget = document.querySelector(".agent")

const AgentBusiness = () => {
    agentHTMLTarget.innerHTML = "<h2>Agent Info<h2>"
    agentsOnly.forEach(
        (agentArray) => {
            agentHTMLTarget.innerHTML += AgentWeb(agentArray)
        }
    )
}

const AgentWeb = (agentArray) => {
    return `
        <article class="agents">
            <div class="agent__name">${agentArray.firstName} ${agentArray.lastName}</div>
            <div class="agent__company>${agentArray.company}</div>
            <div class="agent__phone>${agentArray.phone}</div>
        </article>
    `
}
  
AgentBusiness()



const businessSearch = (typedSearch) => {
    const searching = completeBusinessList.find(business => {
      return  business.companyName.includes(typedSearch)})
    return searching
}

const companySearchResultArticle = document.querySelector(".foundCompanies")
    document
        .querySelector("#companySearch")
        .addEventListener("keypress", keyPressEvent => {
            if (keyPressEvent.charCode === 13) {
                
            const foundBusiness = businessSearch(keyPressEvent.target.value)

                companySearchResultArticle.innerHTML = `
                    <h2>
                    ${foundBusiness.companyName}
                    </h2>
                    <section>
                    ${foundBusiness.addressFullStreet}

                    </section>
                    <section>
                    ${foundBusiness.addressCity},
                    ${foundBusiness.addressStateCode}
                    ${foundBusiness.addressZipCode}
                    </section>
                `;
        }
        
    });


