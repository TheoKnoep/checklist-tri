document.id_counter = 0; 

let list = new List({
	title: 'Bois-le-Roi', 
	date: new Date('2023-09-10'),
	items: [], 
	sport: 'triathlon'
}); 

// list.initPreset(); 
list.initFromLocalSave(); 


console.log(list.items); 


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




window.addEventListener('triggerSavelist', () => {
	list.saveInLocalStorage(); 
	console.log('saved!'); 
})

window.addEventListener('deleteItem', evt => {
	console.log(evt); 
	list.deleteItem(evt.detail); 
}); 