document.id_counter = 0; 

let list = new List({
	title: 'Bois-le-Roi', 
	date: new Date('2023-09-10'),
	items: [], 
	sport: 'triathlon'
}); 


list.initFromLocalSave(); 
if (list.length === 0) {
	list.initPreset();
}



// display categories : 
const order = [
	'Indispensables', 
	'Général', 
	'Transition', 
	'Natation', 
	'Vélo', 
	'Càp',
	'Après-course'
]; 





// display elements : 
order.forEach(category => {
	let categoryList = new CategoryList(category, list.getItemsOfCategory(category)); 
	categoryList.render(document.querySelector('#app-container')); 
})

// test : display 1 category : 
	// let categoryList = new CategoryList('Càp', list.getItemsOfCategory('Càp')); 
	// categoryList.render(document.querySelector('#app-container')); 

	// categoryList.moveListItem(0,4); 

// --	


window.addEventListener('triggerSavelist', () => {
	list.saveInLocalStorage(); 
	console.log('saved!'); 
})

window.addEventListener('deleteItem', evt => {
	console.log(evt); 
	list.deleteItem(evt.detail); 
}); 