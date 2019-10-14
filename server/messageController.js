let requestMessage = [];
//ASSIGN ID FOR EDITING/DELETING
let id = 1;

//Controller - addMessage
function addMessage(req, res) {
	const { first, last, email, contact, comment } = req.body;
	requestMessage.push({ first, last, email, contact, comment, id });
	id++;
	res.status(200).json(requestMessage);
}

//Controller - getMessage
function getMessage(req, res) {
	res.status(200).json(requestMessage);
}

//Controller - removeMessage
function removeMessage(req, res) {
	const { id } = req.params;
	console.log(id);
	const index = requestMessage.findIndex((val) => {
		if (val.id == id) {
			return true;
		}
	});
	requestMessage.splice(index, 1);
	res.status(200).json(requestMessage);
}

module.exports = {
	addMessage: addMessage,
	getMessage: getMessage,
	removeMessage: removeMessage
};
