
const GEMINI_API_KEY = "AIzaSyBto9zJDNJCvz76qz56oeMPOBfHhxjPTKA";

interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string
      }[]
    }
  }[];
}

export async function fetchDefinitionWithAI(term: string): Promise<{definicao: string; exemplo_uso: string}> {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Defina o termo jurídico "${term}" em português do Brasil. Forneça uma definição detalhada e um exemplo prático de uso. Retorne no formato JSON com os campos: definicao e exemplo_uso.`
            }]
          }]
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Falha ao obter definição da IA');
    }

    const data = await response.json() as GeminiResponse;
    const textResponse = data.candidates[0].content.parts[0].text;
    
    // Extract JSON from the response
    const jsonMatch = textResponse.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Formato de resposta inválido');
    }
    
    const jsonStr = jsonMatch[0];
    const result = JSON.parse(jsonStr);
    
    return {
      definicao: result.definicao || '',
      exemplo_uso: result.exemplo_uso || ''
    };
  } catch (error) {
    console.error('Erro ao consultar IA:', error);
    return {
      definicao: 'Não foi possível obter uma definição para este termo.',
      exemplo_uso: 'Tente novamente mais tarde ou use termos diferentes.'
    };
  }
}
