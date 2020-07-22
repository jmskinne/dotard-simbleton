export const ManuWeb = (manufacturingArray) => {
    return `
        <article class="businessList-manufacturing">
            <div class="company__name">${manufacturingArray.companyName}</div>
            <div class="address">${manufacturingArray.addressFullStreet}</div>
            <div class="company__cityStZip">${manufacturingArray.addressCity}, ${manufacturingArray.addressStateCode} ${manufacturingArray.addressZipCode}</div>
    </article>
    `
}