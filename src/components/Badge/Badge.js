import styled from "@emotion/styled";


export const handleColorType = color => {
    switch (color) {
        case "Normal":
            return "#03a9f3";
        case "Fire":
            return "#EE8130";
        case "Water":
            return "#6390F0";
        case "Electric":
            return "#F7D02C";
        case "Grass":
            return "#7AC74C";
        case "Ice":
            return "#96D9D6";
        case "Fighting":
            return "#C22E28";
        case "Poison":
            return "#A33EA1";
        case "Ground":
            return "#E2BF65";
        case "Flying":
            return "#A98FF3";
        case "Psychic":
            return "#F95587";
        case "Bug":
            return "#A6B91A";
        case "Rock":
            return "#B6A136";
        case "Ghost":
            return "#735797";
        case "Dragon":
            return "#6F35FC";
        case "Dark":
            return "#705746";
        case "Steel":
            return "#B7B7CE";
        case "Fairy":
            return "#D685AD";
        default:
            return "#03a9f3";
    }
  };

export const handleColorFontBadge = color => {
switch (color) {
    case "Normal":
        return "#1e272e";
    case "Fire":
        return "#1e272e";
    case "Water":
        return "#f7f1e3";
    case "Electric":
        return "#1e272e";
    case "Grass":
        return "#1e272e";
    case "Ice":
        return "#1e272e";
    case "Fighting":
        return "#f7f1e3";
    case "Poison":
        return "#d2dae2";
    case "Ground":
        return "#1e272e";
    case "Flying":
        return "#1e272e";
    case "Psychic":
        return "#f7f1e3";
    case "Bug":
        return "#1e272e";
    case "Rock":
        return "#1e272e";
    case "Ghost":
        return "#f7f1e3";
    case "Dragon":
        return "#f7f1e3";
    case "Dark":
        return "#f7f1e3";
    case "Steel":
        return "#1e272e";
    case "Fairy":
        return "#1e272e";
    default:
        return "#1e272e";
}
};
  
export const Badge = styled.span`
    background-color: ${({ color }) => handleColorType(color)};
    color: ${({ color }) => handleColorFontBadge(color)};
    padding: 10px;
    border-radius: 16px;
    margin: 1px;
`;