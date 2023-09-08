class View {

}

class CategoryList {
	constructor(title, items) {
		this.dom_elt = null; 
		this.items = items; 
		this.title = title; 
		this.id = 'id_'+document.id_counter++; 
	}

	render($target) {
		$target.insertAdjacentHTML('beforeend', this.template()); 
		this.dom_elt = document.querySelector(`#${this.id}`); 

		// populate liste : 
		this.items.forEach(item => {
			item.insert_HTML_Card(this.dom_elt.querySelector('.list-items')); 
		})

		this.handleEvents(); 
	}

	template() {
		return `<div id="${this.id}" class="category-block">
			<h2>${this.title}<button data-role="add-item" data-id="${this.is}">+</button></h2>
			<div class="list-items">
				
			</div>
		</div>`; 

	}

	handleEvents() {

	}
}