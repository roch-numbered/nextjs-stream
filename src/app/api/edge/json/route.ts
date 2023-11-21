import { NextResponse } from "next/server";
import {startTransaction, configureScope, captureMessage} from "@sentry/nextjs";
import { getStream, wait } from "@/utils";

const MESSAGE = 'Simple message (Edge Runtime + JSON response)'

export const GET = async () => {
	const transaction = startTransaction({name: 'GET'})

	configureScope(scope => {
		scope.setSpan(transaction)
	})

	captureMessage('Before: ' + MESSAGE)

	await wait(1000)

	captureMessage(MESSAGE)

	transaction.finish()

	return NextResponse.json({message: MESSAGE}, {status: 200})
}

export const runtime = 'edge'
