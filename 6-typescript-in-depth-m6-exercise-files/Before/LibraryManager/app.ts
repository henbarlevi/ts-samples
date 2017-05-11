import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian } from './interfaces';
import { UniversityLibrarian } from './classes';

function GetAllBooks(): Book[] {
	
	let books = [
		{ id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
		{ id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
		{ id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
		{ id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
	];
	
	return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
	
	let numberOfBooks: number = books.length;
	let firstAvailable: string = '';
		
	for(let currentBook of books) {
		
		if(currentBook.available) {
			firstAvailable = currentBook.title;
			break;
		}
	}
	
	console.log('Total Books: ' + numberOfBooks);
	console.log('First Available: ' + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
	
	console.log('Getting books in category: ' + Category[categoryFilter]);
	
	const allBooks = GetAllBooks();
	const filteredTitles: string[] = [];
	
	for(let currentBook of allBooks) {
		if(currentBook.category === categoryFilter) {
			filteredTitles.push(currentBook.title);
		}
	}
	
	return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
	
	for(let title of titles) {
		console.log(title);
	}
}

function GetBookByID(id: number): Book {
	const allBooks = GetAllBooks();
	return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
	return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
	console.log('Creating customer ' + name);
	
	if(age) {
		console.log('Age: ' + age);
	}
	
	if(city) {
		console.log('City: ' + city);
	}
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
	
	console.log('Checking out books for ' + customer);
	
	let booksCheckedOut: string[] = [];
	
	for(let id of bookIDs) {
		let book = GetBookByID(id);
		if (book.available) {
			booksCheckedOut.push(book.title);
		}
	}
	
	return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
	const allBooks = GetAllBooks();
	const foundTitles: string[] = [];
	
	if(typeof bookProperty == 'string') {
		// get all books by a particular author
		for(let book of allBooks) {
			if(book.author === bookProperty) {
				foundTitles.push(book.title);
			}
		}
	}
	
	else if(typeof bookProperty == 'boolean') {
		// get all books based on specified availability
		for(let book of allBooks) {
			if(book.available === bookProperty) {
				foundTitles.push(book.title);
			}
		}
	}
	return foundTitles;
}

function PrintBook(book: Book): void {
    console.log(book.title + ' by ' + book.author);
}

//*********************************************

