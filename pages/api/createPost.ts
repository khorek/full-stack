// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client';

type postProps = {
  title: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: any = await JSON.parse(req.body);
    if (req.method === "POST") {
      // check for empty
      if (!post.title.length) {
        return res.status(500).json({ message: "Please fiil out this form" })
      }
      try {
        const data = await prisma.post.create({
          data: { title: post.title },
        })
        res.status(200).json(data)
      }
      catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Error creating new post' });
      }
    }
  } catch (err) {
    console.log('err', err);
  }
}
