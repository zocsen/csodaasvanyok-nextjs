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
      <select
        className="delivery-selector"
        value={deliveryMethod}
        onChange={handleDeliverySelection}
        autoFocus={true}
      >
        <option disabled defaultChecked hidden value="">
          Házhozszállítási forma kiválasztása
        </option>
        <option value="FoxPost Automata">FoxPost csomagautomata 1100Ft</option>
        <option value="GLS Házhozszállítás">GLS házhozszállítás 1900Ft</option>
        <option value="Posta Házhozszállítás">
          Magyar Posta házhozszállítás 1350Ft
        </option>
      </select>
    </div>
  );
};

export default DeliveryMethodSelector;
