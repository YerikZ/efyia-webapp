import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  const { accessCode, timestamp } = await request.json()
  
  // Log the access code usage (e.g., to a database or file)
  console.log(`Access code used: ${accessCode} at ${timestamp}`)
  
  // You might want to add more sophisticated logging here
  // Note: In the Edge Runtime, you can't use Node.js APIs directly
  // You might need to use a database or logging service that supports Edge Runtime
  
  return NextResponse.json({ message: 'Access logged successfully' }, { status: 200 })
}