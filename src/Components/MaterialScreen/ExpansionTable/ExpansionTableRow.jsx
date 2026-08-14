export default function ExpansionTableRow({
  leftProperty = {name: "Left side", value: "-"},  rightProperty = {name: "Right side", value: "-"}
}) {


  return (
    <tr>
      <td>{leftProperty.name}</td>
      <td className="valueCell">{leftProperty.value ?? "-"}</td>
      <td className="leftPaddingCell">{rightProperty.name}</td>
      <td className="valueCell">{rightProperty.value ?? "-"}</td>
    </tr>
  );
}
