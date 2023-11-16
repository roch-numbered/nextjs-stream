import {startTransaction, configureScope, captureMessage} from "@sentry/nextjs";
import { getStream, wait } from "@/utils";

const MESSAGE = 'Simple message (Edge)'

export const GET = async () => {
	const {readable, controller} = getStream()

	const transaction = startTransaction({name: 'GET'})

	configureScope(scope => {
		scope.setSpan(transaction)
	})

	;(async () => {
		captureMessage('Before: ' + MESSAGE)

		await wait(1000)

		controller.enqueue(new TextEncoder().encode(MESSAGE))

		captureMessage(MESSAGE)

		transaction.finish()
		controller.close()
	})()

	return new Response(readable, {
		status: 200,
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	})
}

export const runtime = 'edge'
