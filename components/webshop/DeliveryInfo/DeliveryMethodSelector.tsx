import { ChangeEvent } from "react";
import "./delivery-method-selector.scss";

interface DeliveryMethodSelectorProps {
  deliveryMethod: string;
  handleDeliverySelection: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const DeliveryMethodSelector = ({
  deliveryMethod,
  handleDeliverySelection,
}: DeliveryMethodSelectorProps) => {
  return (
    <div className="delivery-method-selector">
      <label htmlFor="delivery-method-select" className="screen-reader-only">
        Válassza ki a szállítási módot:
      </label>
      <select
        id="delivery-method-select"
        className="delivery-selector"
        value={deliveryMethod}
        onChange={handleDeliverySelection}
        autoFocus={true}
      >
        <option disabled defaultChecked hidden value="">
          Szállítási mód kiválasztása
        </option>
        <option value="GLS Házhozszállítás">GLS házhozszállítás 1900Ft</option>
        <option value="Posta Házhozszállítás">
          Magyar Posta házhozszállítás 1350Ft
        </option>
        <option
          style={{ color: "red", fontWeight: 600 }}
          value="FoxPost Automata"
        >
          FoxPost csomagautomata 1100Ft
        </option>
      </select>
    </div>
  );
};

export default DeliveryMethodSelector;
