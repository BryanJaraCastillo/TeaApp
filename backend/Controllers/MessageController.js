const Message = require('./models/Message');

// Enviar un mensaje
const sendMessage = async (req, res) => {
  const { recipient_id, content, replyTo } = req.body;
  const sender_id = req.user._id;

  try {
    const message = new Message({ recipient_id, sender_id, content, replyTo });
    await message.save();
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener mensajes entre dos usuarios
const getMessages = async (req, res) => {
  const user1 = req.user._id;
  const user2 = req.params.user_id;

  try {
    const messages = await Message.find({
      $or: [
        { recipient_id: user1, sender_id: user2 },
        { recipient_id: user2, sender_id: user1 }
      ]
    }).sort('timestamp');
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un mensaje
const deleteMessage = async (req, res) => {
  const messageId = req.params.message_id;
  const userId = req.user._id;

  try {
    const message = await Message.findById(messageId);
    if (message.sender_id.toString() === userId.toString() || message.recipient_id.toString() === userId.toString()) {
      await Message.deleteOne({ _id: messageId });
      res.status(200).json({ message: 'Message deleted' });
    } else {
      res.status(403).json({ message: 'You are not authorized to delete this message' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  sendMessage,
  getMessages,
  deleteMessage
};
