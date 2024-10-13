const suggestions = ["Vestido negro", "Vestido blanco", "Vestido rosado", "Vestido morado"];
const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestions');

searchInput.addEventListener('input', function() {
    const inputValue = this.value.toLowerCase();
    suggestionsBox.innerHTML = '';

    if (inputValue) {
        const filteredSuggestions = suggestions.filter(item => 
            item.toLowerCase().includes(inputValue)
        );

        filteredSuggestions.forEach(item => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = item;
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.addEventListener('click', function() {
                searchInput.value = item;
                suggestionsBox.innerHTML = '';
            });
            suggestionsBox.appendChild(suggestionItem);
        });
    }
});



