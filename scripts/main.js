import {NewYorkBusiness} from "./ny-businesses/nyBusinessList.js"
import {BusinessTime} from "./BusinessList.js"
import {ManufacturingBusiness} from "./manufacturing/manufacturingList.js"
import {AgentBusiness} from "./agents/agentsList.js"
import {businessSearch, agentsSearch} from "./BusinessProvider.js"

//const completeBusinessList = businessCollection()


BusinessTime()

//move to BusinessProvider, export - filters businesslist to give array of New York Businessness
//const newYorkBusinesses = completeBusinessList.filter(businessArray => businessArray.addressStateCode === "NY")

//run on main.js
NewYorkBusiness()


//move to BusinessProvider, filter business list to provide array of manufacturing businesses
//const manufacturingBusinesses = completeBusinessList.filter(businessArray => businessArray.companyIndustry === "Manufacturing")





ManufacturingBusiness()


//beginning agent
//to BusinessProvider
/*const agentsOnly = completeBusinessList.map(businessArray => ({ 
    firstName : businessArray.purchasingAgent.nameFirst,
    lastName : businessArray.purchasingAgent.nameLast,
    company : businessArray.companyName,
    phone : businessArray.phoneWork

    
}))
*/



  
AgentBusiness()



/*const businessSearch = (typedSearch) => {
    const searching = completeBusinessList.find(business => {
      return  business.companyName.includes(typedSearch)})
    return searching
}
*/
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


const agentSearchResultArticle = document.querySelector(".foundAgents")
    document
        .querySelector("#agentSearch")
        .addEventListener("keypress", keyPressEvent => {
            if (keyPressEvent.charCode === 13) {
                
            const foundAgent = agentsSearch(keyPressEvent.target.value)

                agentSearchResultArticle.innerHTML = `
                    <h2>
                    ${foundAgent.firstName} ${foundAgent.lastName}
                    </h2>
                    <section>
                    ${foundAgent.company}
                    </section>
                    <section>
                    ${foundAgent.phone}

                    </section>
                    <section>
                    
                    </section>
                `;
        }
        
});




