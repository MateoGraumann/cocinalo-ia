import axios from "axios";

export const UseChatGPT = async(text) => {
    try {
        const { data } = await axios.post('https://api.chatgpt.com/v1/chat/completions', 
        {
            prompt: text,
            max_tokens: 100,
            temperature: 0.8,
        },
        {
            headers: {
                "Authorization": `Bearer ${process.env.CHATGPT_KEY}`,
                "Content-Type": "application/json",
            },
        }
        );
        return { data, error: false };
    } catch (err) {
        console.error(err);
        return { data: null, error: true };
    }
}
