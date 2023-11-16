import {startTransaction, configureScope, captureMessage} from "@sentry/nextjs";
import { getStream, wait } from "@/utils";

const MESSAGE = 'Simple message (NodeJS)'

export const GET = async () => {
	const {readable, controller} = getStream()

	const transaction = /* Sentry. */startTransaction({name: 'GET'})

	/* Sentry. */configureScope(scope => {
		scope.setSpan(transaction)
	})

	;(async () => {
		/* Sentry. */captureMessage('Before: ' + MESSAGE)

		await wait(1000)

		controller.enqueue(new TextEncoder().encode(MESSAGE))

		/* Sentry. */captureMessage(MESSAGE)

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

export const runtime = 'nodejs'
