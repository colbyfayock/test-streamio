import { StreamChat } from 'stream-chat';

export default function handler(req, res) {
  const { id } = JSON.parse(req.body);

  const serverClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_API_KEY,  process.env.STREAM_API_SECRET);
  const token = serverClient.createToken(id);

  res.status(200).json({
    token
  });
}
