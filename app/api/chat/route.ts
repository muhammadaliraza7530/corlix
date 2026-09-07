import { NextRequest, NextResponse } from 'next/server';
import { AGENCY_INFO, PORTFOLIO_PROJECTS, SERVICES } from '@/lib/data';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3.6-flash';

function buildKnowledgeBase() {
  const servicesText = SERVICES.map((service) => {
    return [
      `Service: ${service.title}`,
      `Badge: ${service.badge}`,
      `Short description: ${service.shortDescription}`,
      `Full description: ${service.fullDescription}`,
      `Deliverables: ${service.deliverables.join(', ')}`,
      `Ideal for: ${service.idealFor.join(', ')}`,
    ].join('\n');
  }).join('\n\n');

  const portfolioText = PORTFOLIO_PROJECTS.slice(0, 4).map((project) => {
    return [
      `Project: ${project.title}`,
      `Client: ${project.client}`,
      `Category: ${project.categoryLabel}`,
      `Summary: ${project.summary}`,
      `Challenge: ${project.challenge}`,
      `Impact: ${project.impactMetrics.map((metric) => `${metric.label}: ${metric.value}`).join(', ')}`,
    ].join('\n');
  }).join('\n\n');

  return `You are the AI assistant for Corelix Systems.

Company details:
- Name: ${AGENCY_INFO.name}
- Tagline: ${AGENCY_INFO.tagline}
- Description: ${AGENCY_INFO.description}
- Headquarters: ${AGENCY_INFO.headquarters}
- Email: ${AGENCY_INFO.email}
- Phone: ${AGENCY_INFO.phone}
- Services: website development, Android app development, web applications, AI solutions, SEO, and video editing.

Services knowledge base:
${servicesText}

Portfolio knowledge base:
${portfolioText}

Instructions:
- Answer in a helpful, concise, professional tone.
- Use only the information provided above. If details are not mentioned, say you do not have that information.
- If the user asks for pricing, give general guidance rather than a fixed price unless the business model is clearly described.
- Keep responses friendly and business-focused.
- When asked about service selection, recommend the most relevant service(s) from the list above.
- Do not invent projects, clients, or credentials.
- Prefer short practical answers unless the user asks for more detail.`;
}

async function askGemini(question: string) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: buildKnowledgeBase() }],
        },
        contents: [
          {
            role: 'user',
            parts: [{ text: question }],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 400,
        },
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error: ${response.status} ${errorText}`);
  }

  const data = await response.json();

  const answer = data?.candidates?.[0]?.content?.parts
    ?.map((part: { text?: string }) => part.text ?? '')
    .join('')
    ?.trim();

  if (!answer) {
    throw new Error('No response returned from Gemini.');
  }

  return answer;
}

export async function POST(request: NextRequest) {
  try {
    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key is missing from environment variables.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const message = typeof body?.message === 'string' ? body.message.trim() : '';

    if (!message) {
      return NextResponse.json(
        { error: 'Please enter a question for the assistant.' },
        { status: 400 }
      );
    }

    const answer = await askGemini(message);

    return NextResponse.json({ answer });
  } catch (error) {
    console.error('Chat route error:', error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Something went wrong while generating the response.',
      },
      { status: 500 }
    );
  }
}
