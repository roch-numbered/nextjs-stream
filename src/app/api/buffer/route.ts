import { NextResponse } from "next/server"

const URL = `https://www.dropbox.com/scl/fi/pyp85rv22zbn0t43uykvv/mic_2s_mamaia_ad1.jpg?rlkey=ub8emcj1du1oa0audffzx30jv&dl=0&raw=1`

export const GET = async () => {
	const result = await fetch(URL)
	const arrayBuffer = await result.arrayBuffer()
	const buffer = Buffer.from(arrayBuffer)
	console.log('Log: -> GET -> buffer', buffer);

	return NextResponse.json({buffer}, {status: 200})
}

export const runtime = 'edge'
