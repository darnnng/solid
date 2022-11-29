// without principle

class xmlHttpRequestService { }

class xmlHttpService extends xmlHttpRequestService {
	request(url: string, type: string) { }
}

class Http {
	constructor(private xmlHttpService: xmlHttpService) { }

	get(url: string, options: any) {
		this.xmlHttpService.request(url, 'GET');
	}

	post(url: string) {
		this.xmlHttpService.request(url, 'POST');
	}
}


//with principle

class xmlHttpRequestService {
	open() { }
	send() { }
}

interface Connection {
	request(url: string, options: any): any;
}

class xmlHttpService implements Connection {
	xhr = new xmlHttpRequestService();

	request(url: string, type: string) {
		this.xhr.open();
		this.xhr.send();
	}
}

class Http {
	constructor(private httpConnection: Connection) { }
	
	get(url: string, options: any) {
		this.httpConnection.request(url, 'GET');
	}

	post(url: string) {
		this.httpConnection.request(url, 'POST');
	}
}