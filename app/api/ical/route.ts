import axios from 'axios';
import { NextResponse } from 'next/server';
import https from 'https';

// ATTENTION : Ne pas désactiver la vérification SSL en production !
const agent = new https.Agent({ rejectUnauthorized: false });

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const option = searchParams.get('option') || 'dev';
    let url = '';
    if (option === 'reseaux') {
      url = 'https://portailpedagogique.reunion.cci.fr/netypareo/index.php/planning/ical/278E58E8-BAC2-404B-B686-8579C6908CFC/';
    } else {
      url = 'https://portailpedagogique.reunion.cci.fr/netypareo/index.php/planning/ical/AB4B466A-BAD9-4769-A9A7-6172D4603868/';
    }
    const response = await axios.get(url, { httpsAgent: agent });
    return NextResponse.json({ data: response.data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Erreur inconnue';
    console.error('Erreur lors de la récupération du fichier ICS:', error);
    return NextResponse.json(
      { error: `Impossible de récupérer le fichier ICS : ${message}` },
      { status: 500 }
    );
  }
} 