import { Input } from "antd";

export default function VolumeFilterInputGroup({ dimensionName, dimensionChangeHandler }) {
  const styles = {
    input: {
      width: "200px",
    },
    inputAddonBefore: {
      width: "45px",
    },
  };

  return (
    <>
      <Input
        style={styles.input}
        addonBefore={<p style={styles.inputAddonBefore}>{dimensionName.toUpperCase()} (mm)</p>}
        onChange={(event) => dimensionChangeHandler(dimensionName, event)}
      />
    </>
  );
}
