const htmlTarget = document.querySelector(".activeBusinesses")

const BusinessTime = () => {
    htmlTarget.innerHTML = "<h1>Active Businesses</h1>"

    completeBusinessList.forEach(
        (businessesArray) => {
            htmlTarget.innerHTML += businessWeb(businessesArray)
        }
    )
}