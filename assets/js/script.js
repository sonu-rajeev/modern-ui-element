function myFunction() {
    var copyText = document.getElementById('myinput');
    var copyButton = document.getElementById('copyButton');

    // Regular expression to check if the text contains a URL
    var urlPattern = /(https?:\/\/[^\s]+)/g;

    if (urlPattern.test(copyText.value)) {
        copyText.select();
        copyText.setSelectionRange(0, 9999); // For mobile devices

        navigator.clipboard.writeText(copyText.value).then(function () {
            // Show the success message in the button
            copyButton.textContent = "Link copied!";
            copyButton.style.backgroundColor = 'green';
            copyButton.style.color = 'white';

            // Revert the button text after 2 seconds
            setTimeout(function () {
                copyButton.textContent = "Copy Link";
                copyButton.style.backgroundColor = ''; // Reset to original background color
                copyButton.style.color = ''; // Reset to original text color
            }, 2000);
        }).catch(function (err) {
            console.error('Failed to copy text: ', err);
        });
    } else {
        // Show the error message in the button
        copyButton.textContent = "No link";
        copyButton.style.backgroundColor = 'red';
        copyButton.style.color = 'white';

        // Revert the button text after 2 seconds
        setTimeout(function () {
            copyButton.textContent = "Copy Link";
            copyButton.style.backgroundColor = ''; // Reset to original background color
            copyButton.style.color = ''; // Reset to original text color
        }, 2000);
    }
}



// notifications
const notContainer = document.getElementById("notwrap");

const notfts = notContainer.getElementsByClassName("cd-ppl");

const notftsArray = Array.from(notfts);

notftsArray.forEach(btn => {
    btn.addEventListener("click", () => {
        const current = document.querySelector(".actives");
        if (current) {
            current.classList.remove("actives");
        }
        btn.classList.add("actives");
    });
});

// dropdown menu
function selectOption(element, dropdownId) {
    const button = document.querySelector(`button[data-dropdown-id="${dropdownId}"]`);
    button.innerHTML = element.innerText + `
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" aria-hidden="true">
            <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>`;
}
