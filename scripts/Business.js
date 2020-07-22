export const businessWeb = (businessesArray) => {
    return `
        <section class="businessOrg">
            <div class="company__name">${businessesArray.companyName}</div>
            <div class="address">${businessesArray.addressFullStreet}</div>
            <div class="company__cityStZip">${businessesArray.addressCity}, ${businessesArray.addressStateCode} ${businessesArray.addressZipCode}</div>
        </section>
    `
}