import "./style.css";
const CharCard = ({ character }) => {
  return (
    <div
      className={
        character.status === "Alive"
          ? "aliveCharacter character"
          : "deadCharacter character"
      }
    >
      <p className="characterName"> Nome: {character.name} </p>
      <img alt={character.name} src={character.image} />
      <p>Origem: {character.origin.name}</p>
      {character.status === "Alive" ? (
        <p>Status: Vivo</p>
      ) : (
        <p>Status: Morto</p>
      )}
    </div>
  );
};
export default CharCard;
