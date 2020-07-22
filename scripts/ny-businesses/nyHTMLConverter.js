export const NYweb = (NewYorkArray) => {
    return `
        <article class="businessList-newYork>
            <div class="company__name">${NewYorkArray.companyName}</div>
            <div class="address">${NewYorkArray.addressFullStreet}</div>
            <div class="company__cityStZip">${NewYorkArray.addressCity}, ${NewYorkArray.addressStateCode} ${NewYorkArray.addressZipCode}</div>
        </article>
    `
}