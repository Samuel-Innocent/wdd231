export function setSectionSelection(sections) {
    const html = sections.map(
        (section) => `<option value="${section.sectionNum}">${section.sectionNum}</option>`
    );
    document.querySelector("#sectionNumber").innerHTML = html.join("");
}