import Image from 'next/image';

const PlayerCard = ({ player }) => (
    <div className="card">
        <Image src={player.photo} alt={`${player.legendName}`} />
        <h2 className="text-2xl font-extrabold">{player.legendName}</h2>
        <p className="text-slate-600">{player.nationality}</p>
    </div>
);

export default PlayerCard;