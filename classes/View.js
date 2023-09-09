class View {

}

class CategoryList {
	constructor(title, items) {
		this.dom_elt = null; 
		this.items = items; 
		this.title = title; 
		this.id = 'id_'+document.id_counter++; 
		this.style = {
			item_height: 60, 
			item_margin: 12
		}
	}

	render($target) {
		$target.insertAdjacentHTML('beforeend', this.template());  
		this.dom_elt = document.querySelector(`#${this.id}`); 

		this.handleEvents(); 
	}

	template() {
		let order = 0; 
		let list_items = ``; 

		// TO DO ... trier les éléments en fonction de s'ils sont cochés ou non
		let checked_items = this.items.filter(item => {
			return item.state === 1; 
		}); 
		let unchecked_items = this.items.filter(item => {
			return item.state === 0; 
		}); ; 

		const insertList = (list) => {
			list.forEach(item => {		
				let from_top = order * (this.style.item_height + this.style.item_margin); 
				let html = `<ol data-order="${order}" style="top: ${from_top}px" class="${item.state ? 'checked':''}">
					<button data-role="delete">X</button>
					<span>${item.name}</span>
					<input type="checkbox" ${item.state ? 'checked':''} data-role="register"/>
				</ol>`;
				
				order++; 
				list_items += html; 
			})
		}

		insertList(unchecked_items); 
		insertList(checked_items); 

		let blockHeight = this.style.item_height + (this.style.item_height + this.style.item_margin)*(this.items.length+1); 

		return `<div id="${this.id}" class="category-block" style="height: ${blockHeight}px">
			<h2><span>${this.title}</span><button data-role="add-item" data-id="${this.id}">+</button></h2>
			<div class="list-items">
				${list_items}
			</div>
		</div>`; 

	}

	handleEvents() {

	}


	moveListItem(initialOrder, newOrder) {
		let listItem = document.querySelector(`#${this.id} [data-order="${initialOrder}"]`); 
		console.log(listItem); 
		console.log(listItem.dataset.order); 

		listItem.dataset.order = newOrder; 
		listItem.style.top = newOrder * (this.style.item_height + this.style.item_margin) + 'px'; 
	}
}