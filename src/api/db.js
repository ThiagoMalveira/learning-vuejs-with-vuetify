const DB_NAME = 'pacientedb';
const DB_VERSION = 2;
let DB;

export default {

	async getDb() {
		return new Promise((resolve, reject) => {

			if(DB) { return resolve(DB); }
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);
			
			request.onerror = e => {
				console.log('Error opening db', e);
				reject('Error');
			};
	
			request.onsuccess = e => {
				DB = e.target.result;
				resolve(DB);
			};
			
			request.onupgradeneeded = e => {
				let db = e.target.result;
				db.createObjectStore("pacientes", { autoIncrement: true, keyPath:'id' });
			};
		});
	},
	async deletePaciente(paciente) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['pacientes'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('pacientes');
			store.delete(paciente.id);
		});	
	},
	async getPacientes() {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['pacientes'],'readonly');
			trans.oncomplete = () => {
				resolve(pacientes);
			};
			
			let store = trans.objectStore('pacientes');
			let pacientes = [];
			
			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
					pacientes.push(cursor.value)
					cursor.continue();
				}
			};

		});
	},

	async savePaciente(paciente) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['pacientes'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('pacientes');
			store.put(paciente);

		});
	
	}

}