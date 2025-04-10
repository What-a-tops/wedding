import React from "react";
import Semi from "../../Title/semi";
import SemiHeader from "../../Title/SemiHeader";
import SemiTitle from "../../Title/SemiTitle";
import ItalicTitle from "../../Title/italicTitle";

const index = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="text-center">
        <SemiHeader value="To assist us in our Needs" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center text-xs sm:text-sm md:text-base">
        <div>
          <SemiTitle value="Best Man" />
          <Semi value="mr. Neil nemecio n. aclag" />
        </div>
        <div>
          <SemiTitle value="Maid of Honor" />
          <Semi value="MS. MAEGAN GELERA" />
        </div>
      </div>

      <div className="text-center">
        <SemiHeader value="To guide us on our Way" />
      </div>
      <div className="grid grid-cols-2 gap-2 text-md text-gray-800">
        <div>
          <SemiTitle value="Groomsmen" />
          <Semi value="mr. jOHN jocy t. tabuac" />
          <Semi value="mr. cyrus paul u. bacate" />
          <Semi value="mr. elpidio iii b. gelera" />
          <Semi value="mr. stephene s. vergara" />
          <Semi value="mr. jonathan a. mendros" />
        </div>
        <div>
          <SemiTitle value="Bridesmaids" />
          <Semi value="ms. jemarlyn r. barabad" />
          <Semi value="mrs. loury jane b. caÑon" />
          <Semi value="ms. nikki q. orella" />
          <Semi value="ms. erecca mae. m. grego" />
          <Semi value="ms. rosaleah t. dalina" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 text-center">
        <div>
          <SemiHeader value="To carry our symbol of Love" />
          <Semi value="JOHN NETHAN M. SAÑO" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center text-xs sm:text-sm md:text-base">
        <div>
          {/* <ItalicTitle value="To carry our symbol of Treasures" /> */}
          <SemiHeader value="To carry our symbol of Treasures" />
          <Semi value="LUKE R. FERMIN" />
        </div>
        <div>
          {/* <ItalicTitle value="To carry our symbol of Faith" /> */}
          <SemiHeader value="To carry our symbol of Faith" />
          <Semi value="SETH ALLEN G. QUILBIO" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 text-center">
        <div>
          {/* <ItalicTitle value="To shower our aisle with Flowers" /> */}
          <SemiHeader value="To shower our aisle with Flowers" />
          <Semi value="mexi m. casbadillo" />
          <Semi value="sofia allen g. quilbio" />
          <Semi value="zipporah veronica s. bacnutan" />
          <Semi value="jazmine faith d. obrar" />
          <Semi value="nythea robin l. magada" />
          <Semi value="bella grace a. bacate" />
        </div>
      </div>
    </div>
  );
};

export default index;
