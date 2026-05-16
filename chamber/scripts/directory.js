const url = "data/members.json";
const container = document.querySelector('#members-container');
const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');

async function getMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data);
        } else {
            console.error("Fetch failed with status: " + response.status);
        }
    } catch (error) {
        console.error("Error fetching JSON:", error);
    }
}

function displayMembers(members) {
    container.innerHTML = ""; 
    members.forEach((member) => {
        let section = document.createElement('section');
        
        section.innerHTML = `
            <img src="${member.image}" alt="${member.name} Logo" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p class="membership">Tier: ${member.MembershipType}</p>
        `;
        container.appendChild(section);
    });
}

gridBtn.addEventListener('click', () => {
    container.classList.add('grid-view');
    container.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
    container.classList.add('list-view');
    container.classList.remove('grid-view');
});

// Footer Dates
document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;

getMembers();