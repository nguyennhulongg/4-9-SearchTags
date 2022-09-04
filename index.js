const content = document.querySelector('.content');
const input = document.querySelector('.content input');
const tags = [];


function addTags() {
    const value = input.value;
    tags.push(value);
    createTags();
}

function createTags() {
    content.innerHTML = '';
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li>
                                ${tag}
                                <i class="fa-solid fa-x" onclick = 'deleteTag(${i})'></i>
                            </li> 
                            `
    }
    content.appendChild(input);
}

function deleteTag(index) {
    tags.splice(index, 1);
    createTags();
}

function deleteAllTags() {
    tags.splice(0, tags.length);
    createTags();
}

input.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        const value = input.value;
        tags.push(value);
        input.value = '';
        createTags();
    }
});
