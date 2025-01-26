export function chatScroll() {

	const chatWindow = document.querySelector('.chat-window');

	if (chatWindow) {
		chatWindow.scrollTop = chatWindow.scrollHeight;
	}

}
