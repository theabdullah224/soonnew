import { NextResponse } from 'next/server';
import connectToDatabase from '../../lib/mongoose';
import Email from '../../../app/lib/models/Email';

export async function POST(request: Request) {
  await connectToDatabase();
  
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    const newEmail = new Email({ email });
    await newEmail.save();

    return NextResponse.json({ message: 'Email saved successfully' }, { status: 201 });
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json({ message: 'already exists' }, { status: 409 });
    } else {
      return NextResponse.json({ message: 'Error saving email', error: error.message }, { status: 500 });
    }
  }
}
