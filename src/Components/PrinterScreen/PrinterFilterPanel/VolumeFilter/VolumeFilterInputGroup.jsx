import VolumeFilterInput from "./VolumeFilterInput"

export default function VolumeFilterInputGroup({ dimensionChangeHandler }) {
  const styles = {
    volumeFilterContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    }
  };

  return (
    <div style={styles.volumeFilterContainer}>
      <VolumeFilterInput dimensionName={"x"} dimensionChangeHandler={dimensionChangeHandler}/>
      <VolumeFilterInput dimensionName={"y"} dimensionChangeHandler={dimensionChangeHandler}/>
      <VolumeFilterInput dimensionName={"z"} dimensionChangeHandler={dimensionChangeHandler}/>
    </div>
  );
}
