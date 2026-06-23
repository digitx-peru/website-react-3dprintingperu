import ApplicationsDropdown from "./Navbar/NavbarDropDownOptions/ApplicationsDropdown";
import ProductsDropdown from "./Navbar/NavbarDropDownOptions/ProductsDropdown";
import ServicesDropdown from "./Navbar/NavbarDropDownOptions/ServicesDropdown";
import ResourcesDropdown from "./Navbar/NavbarDropDownOptions/ResourcesDropdown";

export default function HeroOverlay({
  isOverlayVisible,
  activeNavBarCategory,
  overlayRef,
}) {
  const styles = {
    dropdownOverlay: {
      position: "fixed",
      top: "85px", // Adjust based on navbar height
      left: 0,
      width: "100%",
    //   height: "calc(100% - 85px)", // Covers the Hero component
      height: "500px", // Covers the Hero component
      backgroundColor: "rgba(0, 0, 0, 0.98)", // Dark overlay
      display: isOverlayVisible ? "flex" : "none",
      justifyContent: "center",
      alignItems: "start",
      color: "white",
      fontSize: "24px",
      zIndex: 2, // Above the background but below navbar
    },
  };

  return (
    <div
      className="overlayContainer"
      ref={overlayRef}
      style={styles.dropdownOverlay}
    >
      <div className="dropdownSelector">
        {activeNavBarCategory === "aplicaciones" && <ApplicationsDropdown />}
        {activeNavBarCategory === "producto" && <ProductsDropdown />}
        {activeNavBarCategory === "servicios" && <ServicesDropdown />}
        {activeNavBarCategory === "recursos" && <ResourcesDropdown />}
      </div>
    </div>
  );
}
