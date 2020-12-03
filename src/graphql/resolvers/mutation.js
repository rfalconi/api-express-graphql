import Message from '../../models/message';
const Mutation = {
    createMessage: async (_, { title, content, author }) => {
        const newMessage = new Message({ title, content, author });
        return await newMessage.save();
    },
    updateMessage: async (_, { id, title, content, author }) => {
        return await Message.findByIdAndUpdate(id, { title, content, author });
    },
    deleteMessage: async (_, { id }) => {
        return await Message.findByIdAndDelete(id);
    }

}

export default Mutation;