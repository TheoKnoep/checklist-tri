class List {
	constructor(options) {
		this.title = options.title; 
		this.date = options.date; 
		this.sport = options.sport; 
		this.items = options.items; 
	}


	initFromLocalSave() {
		let already_saved = JSON.parse(localStorage.getItem('checklist-tri-saves')) || [];
		already_saved[0].items.forEach(item => {
			this.items.push(new Item(item)); 
		})
		this.title = already_saved[0].title; 
		this.sport = already_saved[0].sport; 
		this.date = already_saved[0].date; 
	}

	initPreset(sport) {
		this.preset()[this.sport].forEach(item => {
			this.items.push(new Item(item)); 
		})
	}

	saveInLocalStorage() {
		let stringified_list = JSON.stringify({
			'items': this.items, 
			'title': this.title, 
			'date': this.date, 
			'sport': this.sport
		}); 
		let already_saved = JSON.parse(localStorage.getItem('checklist-tri-saves')) || []; 


		let id_of_existing_list = -1; 
		for (let i in already_saved) {
			if (already_saved[i].title === this.title) {
				id_of_existing_list = i; 
				break; 
			}
		}

		if (id_of_existing_list < 0) {
			already_saved.push({
				'items': this.items, 
				'title': this.title, 
				'date': this.date, 
				'sport': this.sport
			}); 
		} else {
			already_saved[id_of_existing_list] = {
				'items': this.items, 
				'title': this.title, 
				'date': this.date, 
				'sport': this.sport
			}
		}

		localStorage.setItem('checklist-tri-saves', JSON.stringify(already_saved)); 
	}

	encodeTitle() {
		let output = this.title.toLowerCase().replaceAll(' ', '-'); 
		output = output.replaceAll('é', 'e'); 
		output = output.replaceAll('è', 'e'); 
		output = output.replaceAll('ê', 'e'); 
		output = encodeURIComponent(output); 
		return output; 
	}

	getItemsOfCategory(category) {
		return this.items.filter(item => {
			return item.category === category; 
		})
	}

	addItem(category, itemName) {
		this.items.push(new Item({
			category: category, 
			name: itemName
		})); 
	}

	deleteItem(name) {
		let id = -1; 
		for (let i in this.items) {
			if (this.items[i].name === name); 
			id = i; 
			break; 
		}

		if (id >= 0) {
			this.items.splice(id, 1); 
		}
		console.log(this.items); 
	}



	preset() {
		return {
			triathlon: [
				{
				  "category": "Indispensables",
				  "name": "Papiers et argent"
				},
				{
				  "category": "Général",
				  "name": "Ceinture porte-dossard"
				},
				{
				  "category": "Natation",
				  "name": "Bonnet de natation"
				},
				{
				  "category": "Natation",
				  "name": "Combi néoprène"
				},
				{
				  "category": "Général",
				  "name": "Trifonction"
				},
				{
				  "category": "Général",
				  "name": "Ceinture cardio"
				},
				{
				  "category": "Général",
				  "name": "Montre"
				},
				{
				  "category": "Général",
				  "name": "Dossard"
				},
				{
				  "category": "Transition",
				  "name": "Lunettes de vue + boîte"
				},
				{
				  "category": "Transition",
				  "name": "Barres de ravito"
				},
				{
				  "category": "Transition",
				  "name": "Serviette"
				},
				{
				  "category": "Transition",
				  "name": "Tapis de change"
				},
				{
				  "category": "Transition",
				  "name": "Élastiques"
				},
				{
				  "category": "Natation",
				  "name": "Lunettes de natation"
				},
				{
				  "category": "Natation",
				  "name": "Tongs pour rejoindre le départ"
				},
				{
				  "category": "Vélo",
				  "name": "Vélo"
				},
				{
				  "category": "Vélo",
				  "name": "Casque"
				},
				{
				  "category": "Vélo",
				  "name": "Bidons"
				},
				{
				  "category": "Vélo",
				  "name": "Compteur GPS"
				},
				{
				  "category": "Vélo",
				  "name": "Matériel réparation"
				},
				{
				  "category": "Vélo",
				  "name": "Chaussures de vélo + semelles"
				},
				{
				  "category": "Vélo",
				  "name": "Bouchons de ceintre"
				},
				{
				  "category": "Càp",
				  "name": "Chaussettes"
				},
				{
				  "category": "Càp",
				  "name": "Chaussures de càp avec lacets auto"
				},
				{
				  "category": "Càp",
				  "name": "Casquette"
				},
				{
				  "category": "Càp",
				  "name": "Flasque d'eau"
				},
				{
				  "category": "Après-course",
				  "name": "Habits de rechange (sous-vêtements, habits…)"
				}
			  ]
		}
	}
}