const DB_NAME = 'alunodb';
const DB_VERSION = 1;
let DB;

export default {

	async getDB() {
		return new Promise((resolve, reject) => {

			if(DB)return resolve(DB); 
			
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);
			
			request.onerror = e => {
				console.log('Erro ao criar IndexedDB', e)
				reject('Error');
			};
	
			request.onsuccess = e => {
				DB = e.target.result;
				resolve(DB);
			};
			
			request.onupgradeneeded = e => {
				let db = e.target.result;
				db.createObjectStore("alunos", { autoIncrement: true, keyPath:'id' });
			};
		});
	},
	async deleteAluno(aluno) {

		let db = await this.getDB();

		return new Promise(resolve => {

			let trans = db.transaction(['alunos'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('alunos');
			store.delete(aluno.id);
		});	
	},
	async getAlunos() {

		let db = await this.getDB();

		return new Promise(resolve => {

			let trans = db.transaction(['alunos'],'readonly');
			trans.oncomplete = () => {
				resolve(alunos);
			};
			
			let store = trans.objectStore('alunos');
			let alunos = [];
			
			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
					alunos.push(cursor.value)
					cursor.continue();
				}
			};

		});
	},

	async saveAlunos(aluno) {

		let db = await this.getDB();

		return new Promise(resolve => {

			let trans = db.transaction(['alunos'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('alunos');
			console.log(aluno);
			store.put(aluno);

		});
		
	},
}