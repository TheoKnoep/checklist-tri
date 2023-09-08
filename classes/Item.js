class Item {
	constructor(options) {
		this.name = options.name; 
		this.category = options.category; 
		this.state = options.state || 0; 
		this.html_elt = null; 
	}

	register() {
		this.state = 1; 
	}
	unregister() {
		this.state = 0; 
	}
	updateName(newName) {
		this.name = newName; 
	}


	insert_HTML_Card($target) {
		let id = 'id_' + document.id_counter++; 
		let newHtml = this.templateHTMLCard(id); 
		$target.insertAdjacentHTML('beforeend', newHtml); 
		this.html_elt = document.querySelector(`#${id}`); 
		console.log(this.state); 
		if (this.state) {
			this.html_elt.querySelector('input[type="checkbox"]').checked = true; 
		}

		// Handle events : 
		this.html_elt.querySelector('input[type="checkbox"]').addEventListener('input', evt => {
			if (evt.target.checked) {
				this.register(); 
			} else {
				this.unregister(); 
			}
			window.dispatchEvent(new Event('triggerSavelist')); 
		})

		this.html_elt.querySelector('button[data-role="delete"]').addEventListener('click', evt => {
			if (confirm('Confirmer la suppression ?')) {
				this.html_elt.remove(); 
				window.dispatchEvent(new CustomEvent('deleteItem', {detail: this.name})); 
				window.dispatchEvent(new Event('triggerSavelist'));
			}
		})

	}

	templateHTMLCard(id) {
		return `<ol id="${id}"><span>${this.name}</span><input type="checkbox" /><button data-role="delete">Supprimer</button></ol>`; 
	}
}