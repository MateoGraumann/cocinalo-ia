import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

export const UseChatGPT = async (text) => {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: text
                }
            ],
            max_tokens: 1000,
            temperature: 0.8,
        });

        const responseText = completion.choices[0]?.message?.content || 'No se pudo generar una respuesta';
        
        return { 
            data: responseText, 
            error: false 
        };
    } catch (err) {
        console.error('Error en ChatGPT API:', err);
        return { 
            data: null, 
            error: true,
            errorMessage: err.message 
        };
    }
};