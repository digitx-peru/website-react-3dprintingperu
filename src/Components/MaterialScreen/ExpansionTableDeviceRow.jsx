export default function ExpansionTableDeviceRow({
  property = { name: "Property name", value: "-" },
}) {
  return (
    <tr>
      <td className="nameCell">{property.name ?? "-"}</td>
      <td className="valueCell">{property.value ?? "-"}</td>
    </tr>
  );
}
