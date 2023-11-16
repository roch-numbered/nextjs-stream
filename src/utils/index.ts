export const wait = (duration: number) => new Promise(resolve => setTimeout(resolve, duration))

export const getStream = () => {
	let controller: ReadableStreamDefaultController

	const readable = new ReadableStream({
		start (_controller) {
			controller = _controller
		},
	})

	// @ts-expect-error `controller` is defined in ReadableStream constructor
	return {readable, controller}
}
