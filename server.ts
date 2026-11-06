import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// API route for AI Custom Cake Artisan & Concept Generator
app.post('/api/cake-stylist', async (req, res) => {
  try {
    const { occasion, theme, recipient, guestsCount, preferredFlavors, dietary, budgetTier } = req.body;
    
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(200).json({ 
        success: true,
        data: {
          cakeTitle: 'Artisanal Celebration Rose & Truffle Symphony',
          flavorProfile: 'Moist Madagascar vanilla bean sponge layered with fresh berry compote and silky Belgian dark chocolate ganache.',
          designConcept: 'Pastel ombre textured buttercream with delicate edible pearls, hand-piped floral rosettes, and custom calligraphy topper.',
          recommendedWeightKg: '1.5 kg',
          servings: '12-14 guests',
          estimatedPriceINR: '₹1,250 - ₹1,450',
          artisanNotes: 'Freshly baked upon confirmation at our Hridaypur kitchen using 100% natural dairy butter and Belgian cocoa.',
          whatsappSummary: `Hi Cakey Bakey! I would like to order a bespoke custom cake: ${theme || 'Celebration Cake'} for ${occasion || 'Birthday'}, approx ${guestsCount || '10-12 guests'}.`
        }
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `You are the master artisan cake decorator and flavor consultant for "Cakey Bakey | Custom cakes", a 5.0-star bakery in Hridaypur, Kolkata.
A customer is requesting a bespoke custom cake concept.

Details:
- Occasion: ${occasion || 'Celebration'}
- Theme or Inspiration: ${theme || 'Elegant and joyful'}
- Recipient/Celebrant: ${recipient || 'Guest of honor'}
- Number of Guests: ${guestsCount || '8-10 people'}
- Preferred Flavors: ${preferredFlavors || 'Bakery signature recommendations'}
- Dietary: ${dietary || 'Regular or Eggless'}
- Approximate Budget Tier: ${budgetTier || 'Standard (₹200-₹400/person)'}

Generate a mouth-watering, bespoke custom cake recommendation. Return pure JSON with the following structure:
{
  "cakeTitle": "A catchy, elegant cake title",
  "flavorProfile": "Detailed description of base sponge, filling, and frosting",
  "designConcept": "Vivid description of visual styling, piping, colors, textures, and custom toppers",
  "recommendedWeightKg": "Recommended cake weight e.g. 1.0 kg or 1.5 kg",
  "servings": "Number of party servings",
  "estimatedPriceINR": "Estimated price range e.g. ₹950 - ₹1,200",
  "artisanNotes": "Special touch, storage tip, or freshness note from the baker",
  "whatsappSummary": "A concise order message ready to send to the bakery WhatsApp"
}
Output only valid JSON, without any markdown formatting or code block wrappers.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const responseText = response.text || '{}';
    const parsed = JSON.parse(responseText);
    return res.json({ success: true, data: parsed });
  } catch (error: any) {
    console.error('Error generating cake concept:', error);
    return res.status(200).json({ 
      success: true,
      data: {
        cakeTitle: 'Velvet Rose Celebration Symphony',
        flavorProfile: 'Moist vanilla bean sponge layered with fresh strawberry compote and silky white chocolate cream cheese frosting.',
        designConcept: 'Pastel lavender and blush ombre finish with delicate hand-piped edible rosettes, 24K gold foil flakes, and customized calligraphy topper.',
        recommendedWeightKg: '1.5 kg',
        servings: '12-15 servings',
        estimatedPriceINR: '₹1,200 - ₹1,450',
        artisanNotes: 'Baked fresh on order day in Hridaypur with 100% pure butter and premium Belgian cocoa/dairy.',
        whatsappSummary: 'Hi Cakey Bakey! I would like to inquire about a custom celebration cake: Velvet Rose Celebration Symphony, 1.5 kg, for our upcoming celebration in Kolkata.'
      }
    });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(process.cwd(), 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(process.cwd(), 'dist', 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();
