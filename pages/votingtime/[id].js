import Head from 'next/head';
import { playerData } from '../../data/data';

export default function PlayerPage({ player }) {
  return (
    <div>
      <Head>
        <title>{player.legendName}</title>
        {/* Add other metadata and resources */}
      </Head>
      
      <div>
        {/* Display individual player details */}
        <h1>{player.legendName}</h1>
        <p>{player.nationality}</p>
        {/* Add other player details */}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = playerData.map((player) => ({
    params: { id: player.legendId.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const player = playerData.find((player) => player.legendId.toString() === params.id);

  return {
    props: {
      player,
    },
  };
}