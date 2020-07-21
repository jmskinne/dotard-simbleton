import {businessCollection } from "./BusinessProvider.js"


const completeBusinessList = businessCollection()



/* 
keys:
companyName
addressFullStreet
addressCity
addressStateCode
addressZipCode





completeBusinessList.forEach((item) => {
    console.log(item.companyName, item.addressFullStreet)
})

*/
//move to BusinessList.js -- @BusinessList.js import BusinessProvider and Business.js
const htmlTarget = document.querySelector(".activeBusinesses")

const BusinessTime = () => {
    htmlTarget.innerHTML = "<h1>Active Businesses</h1>"

    completeBusinessList.forEach(
        (businessesArray) => {
            htmlTarget.innerHTML += businessWeb(businessesArray)
        }
    )
}





/* accepts businesses array to create html, move to Business.js*/
const businessWeb = (businessesArray) => {
    return `
        <section class="businessOrg">
            <div class="company__name">${businessesArray.companyName}</div>
            <div class="address">${businessesArray.addressFullStreet}</div>
            <div class="company__cityStZip">${businessesArray.addressCity}, ${businessesArray.addressStateCode} ${businessesArray.addressZipCode}</div>
        </section>
    `
}


//run on mainjs
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

const businessFind = completeBusinessList.map((businessArray) => businessArray.companyName)

const companySearchResultArticle = document.querySelector(".foundCompanies")
document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            
           // completeBusinessList.companyName.includes(keyPressEvent.target.value)
            //const foundBusiness = completeBusinessList.find(businessname => businessname.companyName === "keyPressEvent.value")

            /* const foundBusiness = () => {
                return completeBusinessList.find(businessName => (businessName.companyName === searchBar.value)
                )}
               
              
             const foundBusiness = completeBusinessList.find((businessName) => {
                return businessName.companyName === searchBar.value
            })
            console.log(foundBusiness)
            */
           const foundBusiness = (businessesArray businessFind.includes(keyPressEvent.value)

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

    foundBusiness()
